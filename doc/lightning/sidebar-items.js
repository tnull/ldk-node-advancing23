window.SIDEBAR_ITEMS = {"macro":[["decode_tlv_stream","Implements the TLVs deserialization part in a `Readable` implementation of a struct."],["encode_tlv_stream","Implements the TLVs serialization part in a `Writeable` implementation of a struct."],["impl_writeable_tlv_based","Implements `Readable`/`Writeable` for a struct storing it as a set of TLVs If `$fieldty` is `required`, then `$field` is a required field that is not an Option nor a Vec. If `$fieldty` is `(default_value, $default)`, then `$field` will be set to `$default` if not present. If `$fieldty` is `option`, then `$field` is optional field. If `$fieldty` is `vec_type`, then `$field` is a Vec, which needs to have its individual elements serialized."],["impl_writeable_tlv_based_enum","Implement `Readable` and `Writeable` for an enum, with struct variants stored as TLVs and tuple variants stored directly. The format is, for example"],["impl_writeable_tlv_based_enum_upgradable","Implement `MaybeReadable` and `Writeable` for an enum, with struct variants stored as TLVs and tuple variants stored directly."],["log_bytes","Logs a byte slice in hex format."],["log_debug","Log at the `DEBUG` level."],["log_error","Log at the `ERROR` level."],["log_gossip","Log at the `GOSSIP` level."],["log_info","Log at the `INFO` level."],["log_pubkey","Logs a pubkey in hex format."],["log_trace","Log at the `TRACE` level."],["log_warn","Log at the `WARN` level."],["read_tlv_fields","Reads a suffix added by `write_tlv_fields`."],["write_tlv_fields","Writes out a suffix to an object as a length-prefixed TLV stream which contains potentially backwards-compatible, optional fields which old nodes can happily ignore."]],"mod":[["chain","Structs and traits which allow other parts of rust-lightning to interact with the blockchain."],["io","Re-export of either `core2::io` or `std::io`, depending on the `std` feature flag. Traits, helpers, and type definitions for core I/O functionality."],["ln","High level lightning structs and impls live here."],["onion_message","Onion Messages: sending, receiving, forwarding, and ancillary utilities live here"],["routing","Structs and impls for receiving messages about the network and storing the topology live here."],["util","Some utility modules live here. See individual sub-modules for more info."]]};