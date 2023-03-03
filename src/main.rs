use ldk_node::lightning_invoice::Invoice;
use ldk_node::{Builder, Config, Node};

fn main() {
    let esplora_server_url = "http://advancing23.tnull.de:3002".to_string();
    let faucet_nodeid =
        "02b4825d7ca34b18728c687c97a76cf08d53cd9e5092cda163fdbb369158f17c72@13.40.88.238:9736"
            .to_string();

    // Setup Config (configure Esplora URL)

    // Setup Builder from config, build() node

    // Start LDK Node

    // Get a new funding address and have it funded via the faucet

    // Open channel to our node (see above)

    // Parse invoice (Invoice::from_str)

    // Pay invoice
    println!("Hello, world!");
}
