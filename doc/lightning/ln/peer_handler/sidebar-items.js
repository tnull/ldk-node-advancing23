window.SIDEBAR_ITEMS = {"struct":[["ErroringMessageHandler","A dummy struct which implements `ChannelMessageHandler` without having any channels. You can provide one of these as the route_handler in a MessageHandler."],["IgnoringMessageHandler","A dummy struct which implements `RoutingMessageHandler` without storing any routing information or doing any processing. You can provide one of these as the route_handler in a MessageHandler."],["MessageHandler","Provides references to trait impls which handle different types of messages."],["PeerHandleError","Error for PeerManager errors. If you get one of these, you must disconnect the socket and generate no further read_event/write_buffer_space_avail/socket_disconnected calls for the descriptor."],["PeerManager","A PeerManager manages a set of peers, described by their [`SocketDescriptor`] and marshalls socket events into messages which it passes on to its [`MessageHandler`]."]],"trait":[["CustomMessageHandler","Handler for BOLT1-compliant messages."],["SocketDescriptor","Provides an object which can be used to send data to and which uniquely identifies a connection to a remote host. You will need to be able to generate multiple of these which meet Eq and implement Hash to meet the PeerManager API."]],"type":[["SimpleArcPeerManager","SimpleArcPeerManager is useful when you need a PeerManager with a static lifetime, e.g. when you’re using lightning-net-tokio (since tokio::spawn requires parameters with static lifetimes). Other times you can afford a reference, which is more efficient, in which case SimpleRefPeerManager is the more appropriate type. Defining these type aliases prevents issues such as overly long function definitions."],["SimpleRefPeerManager","SimpleRefPeerManager is a type alias for a PeerManager reference, and is the reference counterpart to the SimpleArcPeerManager type alias. Use this type by default when you don’t need a PeerManager with a static lifetime. You’ll need a static lifetime in cases such as usage of lightning-net-tokio (since tokio::spawn requires parameters with static lifetimes). But if this is not necessary, using a reference is more efficient. Defining these type aliases helps with issues such as long function definitions."]]};