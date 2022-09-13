.PHONY: help

help: ## Show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

clear: ## Clear build artifacts
	rm -fr SetcodeMultisigWallet.abi.json
	rm -fr SetcodeMultisigWallet.tvc
	rm -fr SetcodeMultisigWalletContract.js

toolchain: ## Setup toolchain
	npx everdev sol set --compiler 0.21.0 --linker 0.16.5
	npx everdev tonos-cli set --version 0.28.2

compile: ## Compile contract
	npx everdev sol compile SetcodeMultisigWallet.sol
	npx everdev js wrap SetcodeMultisigWallet

define genPK
	npx everdev signer generate $(1) 2>/dev/null || true
	printf "0x%s" "$(shell npx everdev signer info $(1) | jq -r .keys.public)" | tee -a .custodian
endef

genCustodian:
	rm -fr .custodian
	$(call genPK,c1) && printf "," | tee -a .custodian
	$(call genPK,c2) && printf "," | tee -a .custodian
	$(call genPK,c3)

VALUE_INIT=10000000000
owners = "$(shell cat .custodian)"
inputDeploy = "owners:[${owners}],reqConfirms:2"

.codeHash:
	npx tonos-cli --json \
decode stateinit \
--tvc SetcodeMultisigWallet.tvc | jq -r .code_hash > .codeHash

.code:
	npx tonos-cli --json \
decode stateinit \
--tvc SetcodeMultisigWallet.tvc | jq -r .code > .code

.updateRequestId: .addr
	@npx tonos-cli --json --url ${net} \
run --abi SetcodeMultisigWallet.abi.json \
"$(shell cat .addr)" getUpdateRequests {} \
| jq -r .updates[0].id > .updateRequestId

.addr:
	npx everdev contract info \
--network ${net} \
SetcodeMultisigWallet \
| grep Address | cut -d ' ' -f 4 > .addr

info: .addr .updateRequestId
	@echo "address:$(shell cat .addr)"
	@echo "codeHash:$(shell cat .codeHash)"
	@echo "updateRequestId:$(shell cat .updateRequestId)"

topup:
	npx everdev contract topup \
--address "$(shell cat .addr)" \
--value ${value}

deploy: ## Deploy contract
	npx everdev contract deploy \
--network ${net} \
--value "${VALUE_INIT}" \
--input "${inputDeploy}" \
SetcodeMultisigWallet

submitUpdate: .addr .codeHash ## Create transaction for update contract (step 1)
	npx everdev contract run \
SetcodeMultisigWallet submitUpdate \
--address "$(shell cat .addr)" \
--network ${net} \
--run-signer ${signer} \
--input "codeHash:0x$(shell cat .codeHash),owners:[${owners}],reqConfirms:${reqConfirms}"

confirmUpdate: .addr .updateRequestId ## Confirm transaction for update contract (step N+1)
	npx everdev contract run \
SetcodeMultisigWallet \
--address "$(shell cat .addr)" \
--run-signer ${signer} \
confirmUpdate \
--input "updateId:$(shell cat .updateRequestId)"

executeUpdate: .addr .updateRequestId .code ## Execute transaction for update contract (step last)
	npx everdev contract run \
SetcodeMultisigWallet \
--address "$(shell cat .addr)" \
--run-signer ${signer} \
executeUpdate \
--input "updateId:$(shell cat .updateRequestId),code:$(shell cat .code)"
