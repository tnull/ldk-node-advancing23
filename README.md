# Advancing Bitcoin 2023: Getting Started with LDK Node

## Regtest URLs
- Faucet: http://advancing23.tnull.de/
- Bitcoind: advancing23.tnull.de:18444
- Esplora: http://advancing23.tnull.de:3002
- Lightning: 02b4825d7ca34b18728c687c97a76cf08d53cd9e5092cda163fdbb369158f17c72@3.8.195.83:9736

## Invoice Payment Challenge
1. Look through docs
2. Setup `Config` (configure Esplora URL)
3. Setup `Builder` from config, `build()` node
4. Start LDK Node
5. Get a new funding address
6. Have it funded via the faucet
7. Open channel to our node (see above)
8. Get your invoice (10k sats) from the faucet (clock starts ticking!!)
9. Parse invoice (`Invoice::from_str`)
9. Pay invoice
