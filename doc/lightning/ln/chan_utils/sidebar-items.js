window.SIDEBAR_ITEMS = {"constant":[["MAX_ACCEPTED_HTLC_SCRIPT_WEIGHT","The weight of a BIP141 witnessScript for a BOLT3’s “received HTLC output” can vary in function of its CLTV argument value. We define a range that encompasses both its non-anchors and anchors variants. This is the maximum post-anchor value."],["MAX_HTLCS","Maximum number of one-way in-flight HTLC (protocol-level value)."],["OFFERED_HTLC_SCRIPT_WEIGHT","The weight of a BIP141 witnessScript for a BOLT3’s “offered HTLC output” on a commitment transaction, non-anchor variant."],["OFFERED_HTLC_SCRIPT_WEIGHT_ANCHORS","The weight of a BIP141 witnessScript for a BOLT3’s “offered HTLC output” on a commitment transaction, anchor variant."],["REVOKEABLE_REDEEMSCRIPT_MAX_LENGTH","The maximum length of a script returned by get_revokeable_redeemscript."]],"enum":[["HTLCClaim","Describes the type of HTLC claim as determined by analyzing the witness."]],"fn":[["build_anchor_input_witness","Returns the witness required to satisfy and spend an anchor input."],["build_closing_transaction","Build a closing transaction"],["build_commitment_secret","Build the commitment secret from the seed and the commitment number"],["build_htlc_input_witness","Returns the witness required to satisfy and spend a HTLC input."],["build_htlc_transaction","Builds an unsigned HTLC-Success or HTLC-Timeout transaction from the given channel and HTLC parameters. This is used by [`TrustedCommitmentTransaction::get_htlc_sigs`] to fetch the transaction which needs signing, and can be used to construct an HTLC transaction which is broadcastable given a counterparty HTLC signature."],["derive_private_key","Derives a per-commitment-transaction private key (eg an htlc key or delayed_payment key) from the base secret and the per_commitment_point."],["derive_private_revocation_key","Derives a per-commitment-transaction revocation key from its constituent parts."],["derive_public_key","Derives a per-commitment-transaction public key (eg an htlc key or a delayed_payment key) from the base point and the per_commitment_key. This is the public equivalent of derive_private_key - using only public keys to derive a public key instead of private keys."],["derive_public_revocation_key","Derives a per-commitment-transaction revocation public key from its constituent parts. This is the public equivalend of derive_private_revocation_key - using only public keys to derive a public key instead of private keys."],["get_anchor_redeemscript","Gets the witnessScript for an anchor output from the funding public key. The witness in the spending input must be: <BIP 143 funding_signature> After 16 blocks of confirmation, an alternative satisfying witness could be: <> (empty vector required to satisfy compliance with MINIMALIF-standard rule)"],["get_commitment_transaction_number_obscure_factor","Commitment transaction numbers which appear in the transactions themselves are XOR’d with a shared secret first. This prevents on-chain observers from discovering how many commitment transactions occurred in a channel before it was closed."],["get_htlc_redeemscript","Gets the witness redeemscript for an HTLC output in a commitment transaction. Note that htlc does not need to have its previous_output_index filled."],["get_revokeable_redeemscript","A script either spendable by the revocation key or the broadcaster_delayed_payment_key and satisfying the relative-locktime OP_CSV constrain. Encumbering a `to_holder` output on a commitment transaction or 2nd-stage HTLC transactions."],["get_to_countersignatory_with_anchors_redeemscript","Gets the witnessScript for the to_remote output when anchors are enabled."],["htlc_success_tx_weight","Gets the weight for an HTLC-Success transaction."],["htlc_timeout_tx_weight","Gets the weight for an HTLC-Timeout transaction."],["make_funding_redeemscript","Gets the redeemscript for a funding output from the two funding public keys. Note that the order of funding public keys does not matter."]],"struct":[["BuiltCommitmentTransaction","A pre-built Bitcoin commitment transaction and its txid."],["ChannelPublicKeys","One counterparty’s public keys which do not change over the life of a channel."],["ChannelTransactionParameters","Per-channel data used to build transactions in conjunction with the per-commitment data (CommitmentTransaction). The fields are organized by holder/counterparty."],["ClosingTransaction","This class tracks the per-transaction information needed to build a closing transaction and will actually build it and sign."],["CommitmentTransaction","This class tracks the per-transaction information needed to build a commitment transaction and will actually build it and sign.  It is used for holder transactions that we sign only when needed and for transactions we sign for the counterparty."],["CounterpartyChannelTransactionParameters","Late-bound per-channel counterparty data used to build transactions."],["CounterpartyCommitmentSecrets","Implements the per-commitment secret storage scheme from BOLT 3."],["DirectedChannelTransactionParameters","Static channel fields used to build transactions given per-commitment fields, organized by broadcaster/countersignatory."],["HTLCOutputInCommitment","Information about an HTLC as it appears in a commitment transaction"],["HolderCommitmentTransaction","Information needed to build and sign a holder’s commitment transaction."],["TrustedClosingTransaction","A wrapper on ClosingTransaction indicating that the built bitcoin transaction is trusted."],["TrustedCommitmentTransaction","A wrapper on CommitmentTransaction indicating that the derived fields (the built bitcoin transaction and the transaction creation keys) are trusted."],["TxCreationKeys","The set of public keys which are used in the creation of one commitment transaction. These are derived from the channel base keys and per-commitment data."]]};