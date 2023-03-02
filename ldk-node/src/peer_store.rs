use crate::hex_utils;
use crate::Error;

use lightning::util::persist::KVStorePersister;
use lightning::util::ser::{Readable, ReadableArgs, Writeable, Writer};

use bitcoin::secp256k1::PublicKey;

use std::convert::TryFrom;
use std::net::{IpAddr, Ipv4Addr, Ipv6Addr, SocketAddr, ToSocketAddrs};
use std::sync::{Arc, RwLock};

/// The peer information will be persisted under this key.
pub(crate) const PEER_INFO_PERSISTENCE_KEY: &str = "peers";

pub(crate) struct PeerInfoStorage<K: KVStorePersister> {
	peers: RwLock<PeerInfoStorageSerWrapper>,
	persister: Arc<K>,
}

impl<K: KVStorePersister> PeerInfoStorage<K> {
	pub(crate) fn new(persister: Arc<K>) -> Self {
		let peers = RwLock::new(PeerInfoStorageSerWrapper(Vec::new()));
		Self { peers, persister }
	}

	pub(crate) fn add_peer(&self, peer_info: PeerInfo) -> Result<(), Error> {
		let mut locked_peers = self.peers.write().unwrap();

		// Check if we have the peer. If so, either update it or do nothing.
		for stored_info in locked_peers.0.iter_mut() {
			if stored_info.pubkey == peer_info.pubkey {
				if stored_info.address != peer_info.address {
					stored_info.address = peer_info.address;
				}
				return Ok(());
			}
		}

		locked_peers.0.push(peer_info);
		self.persister
			.persist(PEER_INFO_PERSISTENCE_KEY, &*locked_peers)
			.map_err(|_| Error::PersistenceFailed)?;

		Ok(())
	}

	pub(crate) fn remove_peer(&self, peer_pubkey: &PublicKey) -> Result<(), Error> {
		let mut locked_peers = self.peers.write().unwrap();

		locked_peers.0.retain(|info| info.pubkey != *peer_pubkey);

		self.persister
			.persist(PEER_INFO_PERSISTENCE_KEY, &*locked_peers)
			.map_err(|_| Error::PersistenceFailed)?;

		Ok(())
	}

	pub(crate) fn peers(&self) -> Vec<PeerInfo> {
		self.peers.read().unwrap().0.clone()
	}
}

impl<K: KVStorePersister> ReadableArgs<Arc<K>> for PeerInfoStorage<K> {
	#[inline]
	fn read<R: lightning::io::Read>(
		reader: &mut R, persister: Arc<K>,
	) -> Result<Self, lightning::ln::msgs::DecodeError> {
		let peers: RwLock<PeerInfoStorageSerWrapper> = RwLock::new(Readable::read(reader)?);
		Ok(Self { peers, persister })
	}
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub(crate) struct PeerInfoStorageSerWrapper(Vec<PeerInfo>);

impl Readable for PeerInfoStorageSerWrapper {
	fn read<R: lightning::io::Read>(
		reader: &mut R,
	) -> Result<Self, lightning::ln::msgs::DecodeError> {
		let len: u16 = Readable::read(reader)?;
		let mut peers = Vec::with_capacity(len as usize);
		for _ in 0..len {
			peers.push(Readable::read(reader)?);
		}
		Ok(PeerInfoStorageSerWrapper(peers))
	}
}

impl Writeable for PeerInfoStorageSerWrapper {
	fn write<W: Writer>(&self, writer: &mut W) -> Result<(), lightning::io::Error> {
		(self.0.len() as u16).write(writer)?;
		for e in self.0.iter() {
			e.write(writer)?;
		}
		Ok(())
	}
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub(crate) struct PeerInfo {
	pub pubkey: PublicKey,
	pub address: SocketAddr,
}

impl Readable for PeerInfo {
	fn read<R: lightning::io::Read>(
		reader: &mut R,
	) -> Result<Self, lightning::ln::msgs::DecodeError> {
		let pubkey = Readable::read(reader)?;

		let ip_type: u8 = Readable::read(reader)?;

		let ip_addr = if ip_type == 0 {
			let v4bytes: u32 = Readable::read(reader)?;
			let v4addr = Ipv4Addr::from(v4bytes);
			IpAddr::from(v4addr)
		} else {
			let v6bytes: u128 = Readable::read(reader)?;
			let v6addr = Ipv6Addr::from(v6bytes);
			IpAddr::from(v6addr)
		};

		let port: u16 = Readable::read(reader)?;

		let address = SocketAddr::new(ip_addr, port);

		Ok(PeerInfo { pubkey, address })
	}
}

impl Writeable for PeerInfo {
	fn write<W: Writer>(&self, writer: &mut W) -> Result<(), lightning::io::Error> {
		self.pubkey.write(writer)?;

		match self.address.ip() {
			IpAddr::V4(v4addr) => {
				0u8.write(writer)?;
				u32::from(v4addr).write(writer)?;
			}
			IpAddr::V6(v6addr) => {
				1u8.write(writer)?;
				u128::from(v6addr).write(writer)?;
			}
		}

		self.address.port().write(writer)?;

		Ok(())
	}
}

impl TryFrom<String> for PeerInfo {
	type Error = Error;

	fn try_from(peer_pubkey_and_ip_addr: String) -> Result<Self, Self::Error> {
		let mut pubkey_and_addr = peer_pubkey_and_ip_addr.split('@');
		let pubkey = pubkey_and_addr.next();
		let peer_addr_str = pubkey_and_addr.next();
		if pubkey.is_none() || peer_addr_str.is_none() {
			return Err(Error::PeerInfoParseFailed);
		}

		let peer_addr = peer_addr_str.unwrap().to_socket_addrs().map(|mut r| r.next());
		if peer_addr.is_err() || peer_addr.as_ref().unwrap().is_none() {
			return Err(Error::PeerInfoParseFailed);
		}

		let pubkey = hex_utils::to_compressed_pubkey(pubkey.unwrap());
		if pubkey.is_none() {
			return Err(Error::PeerInfoParseFailed);
		}

		Ok(PeerInfo { pubkey: pubkey.unwrap(), address: peer_addr.unwrap().unwrap() })
	}
}

#[cfg(test)]
mod tests {
	use super::*;
	use crate::tests::test_utils::TestPersister;
	use std::str::FromStr;

	#[test]
	fn peer_info_persistence() {
		let persister = Arc::new(TestPersister::new());
		let peer_store = PeerInfoStorage::new(Arc::clone(&persister));

		let pubkey = PublicKey::from_str(
			"0276607124ebe6a6c9338517b6f485825b27c2dcc0b9fc2aa6a4c0df91194e5993",
		)
		.unwrap();
		let address: SocketAddr = "127.0.0.1:9738".parse().unwrap();
		let expected_peer_info = PeerInfo { pubkey, address };
		peer_store.add_peer(expected_peer_info.clone()).unwrap();
		assert!(persister.get_and_clear_did_persist());

		// Check we can read back what we persisted.
		let persisted_bytes = persister.get_persisted_bytes(PEER_INFO_PERSISTENCE_KEY).unwrap();
		let deser_peer_store =
			PeerInfoStorage::read(&mut &persisted_bytes[..], Arc::clone(&persister)).unwrap();

		let peers = deser_peer_store.peers();
		assert_eq!(peers.len(), 1);
		assert_eq!(peers[0], expected_peer_info);
		assert!(!persister.get_and_clear_did_persist());
	}
}
