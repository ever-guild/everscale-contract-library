clear:
	rm -fr SetcodeMultisigWallet.abi.json
	rm -fr SetcodeMultisigWallet.tvc
	rm -fr SetcodeMultisigWalletContract.js

toolchain:
	npx everdev sol set --compiler 0.21.0 --linker 0.16.5
	npx everdev tonos-cli set --version 0.28.2

compile:
	npx everdev sol compile SetcodeMultisigWallet.sol
	npx everdev js wrap SetcodeMultisigWallet
