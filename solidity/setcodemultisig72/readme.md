# Setcode Multisig Wallet 72

_Lifetime transactions is 72 hour_

## Compile

```shell
make toolchain
make compile
```

## Deploy

Create custodian list `.custodian` format `0xPK1,0xPK2,0xP3`

```shell
make genCustodian
```

**deploy devnet**
```shell
make deploy net=dev
```

## Update

Create custodian list `.custodian` format `0xPK1,0xPK2,0xP3`
Create address file `.addr` format `wc:data`

```shell
make submitUpdate net=dev signer=c1 reqConfirms=6
make confirmUpdate net=dev signer=c2
make executeUpdate net=dev signer=c1
```

## Util

```shell
make topup value=5000000000
```
