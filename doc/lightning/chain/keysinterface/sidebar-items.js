window.SIDEBAR_ITEMS = {"enum":[["Recipient","Specifies the recipient of an invoice."],["SpendableOutputDescriptor","Describes the necessary information to spend a spendable output."]],"struct":[["DelayedPaymentOutputDescriptor","Information about a spendable output to a P2WSH script."],["InMemorySigner","A simple implementation of [`WriteableEcdsaChannelSigner`] that just keeps the private keys in memory."],["KeyMaterial","Used as initial key material, to be expanded into multiple secret keys (but not to be used directly). This is used within LDK to encrypt/decrypt inbound payment data."],["KeysManager","Simple implementation of [`EntropySource`], [`NodeSigner`], and [`SignerProvider`] that takes a 32-byte seed for use as a BIP 32 extended key and derives keys from that."],["PhantomKeysManager","Similar to [`KeysManager`], but allows the node using this struct to receive phantom node payments."],["StaticPaymentOutputDescriptor","Information about a spendable output to our “payment key”."]],"trait":[["ChannelSigner","A trait to handle Lightning channel key material without concretizing the channel type or the signature mechanism."],["EcdsaChannelSigner","A trait to sign Lightning channel transactions as described in BOLT 3."],["EntropySource","A trait that describes a source of entropy."],["NodeSigner","A trait that can handle cryptographic operations at the scope level of a node."],["SignerProvider","A trait that can return signer instances for individual channels."],["WriteableEcdsaChannelSigner","A writeable signer."]]};