# Everscale smart contract library

Smart contracts for Everscale blockchain.

`Solidity` and `C++` contracts and accompanying documentation are in their respective folders.

**Some of the more commonly used contracts:**
- [Safe Multisig Wallet](solidity/safemultisig) — formally verified wallet recommended for validators
- [Bridge Multisig Wallet](solidity/bridgemultisig) — `SafeMultisigWallet` with modified method `submitTransaction` the limit on the size of the `payload` has been removed
- [Setcode Multisig Wallet](solidity/setcodemultisig) — `SafeMultisigWallet` added `submitUpdate`, `confirmUpdate`, `executeUpdate`, `getUpdateRequests` methods that changes the contract code, this a more advanced version of the wallet that allows to manage custodians and completely replace the logic of the wallet
- [Surf Setcode Multisig Wallet](solidity/surfmultisig) — `SetcodeMultisigWallet` with modified expiration time (+1)
- [DePool](solidity/depool) — decentralized staking smart contract
- [SMV](governance/SMV) — advanced governance smart contracts
- [DeBots](debots) — decentralized bot interfaces to smart contracts on Everscale
