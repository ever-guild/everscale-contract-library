toolchain: ## Setup toolchain
	npx everdev sol set --compiler 0.21.0 --linker 0.16.5
	npx everdev tonos-cli set --version 0.28.2

compile: toolchain ## Compile contract
	npx everdev sol compile SafeMultisigWallet72.sol
	npx everdev js wrap SafeMultisigWallet72
