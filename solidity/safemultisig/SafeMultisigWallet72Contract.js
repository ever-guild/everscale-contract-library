const SafeMultisigWallet72Contract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "owners",
                        "type": "uint256[]"
                    },
                    {
                        "name": "reqConfirms",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptTransfer",
                "inputs": [
                    {
                        "name": "payload",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "submitTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "allBalance",
                        "type": "bool"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "transId",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "confirmTransaction",
                "inputs": [
                    {
                        "name": "transactionId",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "isConfirmed",
                "inputs": [
                    {
                        "name": "mask",
                        "type": "uint32"
                    },
                    {
                        "name": "index",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "confirmed",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "maxQueuedTransactions",
                        "type": "uint8"
                    },
                    {
                        "name": "maxCustodianCount",
                        "type": "uint8"
                    },
                    {
                        "name": "expirationTime",
                        "type": "uint64"
                    },
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "requiredTxnConfirms",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getTransaction",
                "inputs": [
                    {
                        "name": "transactionId",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "id",
                                "type": "uint64"
                            },
                            {
                                "name": "confirmationsMask",
                                "type": "uint32"
                            },
                            {
                                "name": "signsRequired",
                                "type": "uint8"
                            },
                            {
                                "name": "signsReceived",
                                "type": "uint8"
                            },
                            {
                                "name": "creator",
                                "type": "uint256"
                            },
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "dest",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "sendFlags",
                                "type": "uint16"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            },
                            {
                                "name": "bounce",
                                "type": "bool"
                            }
                        ],
                        "name": "trans",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getTransactions",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "id",
                                "type": "uint64"
                            },
                            {
                                "name": "confirmationsMask",
                                "type": "uint32"
                            },
                            {
                                "name": "signsRequired",
                                "type": "uint8"
                            },
                            {
                                "name": "signsReceived",
                                "type": "uint8"
                            },
                            {
                                "name": "creator",
                                "type": "uint256"
                            },
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "dest",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "sendFlags",
                                "type": "uint16"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            },
                            {
                                "name": "bounce",
                                "type": "bool"
                            }
                        ],
                        "name": "transactions",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "getTransactionIds",
                "inputs": [],
                "outputs": [
                    {
                        "name": "ids",
                        "type": "uint64[]"
                    }
                ]
            },
            {
                "name": "getCustodians",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "pubkey",
                                "type": "uint256"
                            }
                        ],
                        "name": "custodians",
                        "type": "tuple[]"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TransferAccepted",
                "inputs": [
                    {
                        "name": "payload",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECQgEAEQIAAib/APSkICLAAZL0oOGK7VNYMPShAwEBCvSkIPShAgAAAgEgBgQByP9/Ie1E0CDXScIBjifT/9M/0wDT/9P/0wfTB/QE9AX4bfhs+G/4bvhr+Gp/+GH4Zvhj+GKOKvQFcPhqcPhrbfhsbfhtcPhucPhvcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAEFALiOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbkgnzAg+COBA+iogggbd0Cgud6TIPhjlIA08vDiMNMfAfgjvPK50x8B8AH4R26Q3gIBICgHAgEgGAgCASAQCQIBIAsKAAm3XKcyIAHPtsSL3L4QW6OKu1E0NP/0z/TANP/0//TB9MH9AT0Bfht+Gz4b/hu+Gv4an/4Yfhm+GP4Yt7RcG1vAvgjtT+CA/SAoYAgrPhMgED0ho4aAdM/0x/TB9MH0//TB/pA03/TD9TXCgBvC3+AMAv6OM3BwcHBwcHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwcMjJcG8LcOKRII6A6F8EyIIQcxIvcoIQgAAAALHPCx8hbyICyx/0AMiCWGAAAAAAAAAAAAAAAADPC2YhzzGBA5i5lnHPQCHPF5Vxz0EhzeIgDg0AdMlx+wBbMMD/jiz4QsjL//hDzws/+EbPCwD4SvhL+E74T/hM+E1eUMv/y//LB8sH9AD0AMntVN5/+GcB0iIkvI5AJCJvK8grzws/Ks8LHynPCwcozwsHJ88L/ybPCwclzxYkzwt/I88LDyLPFCHPCgALXwsBbyIhpANZgCD0Q28CNd4i+EyAQPR8jhoB0z/TH9MH0wfT/9MH+kDTf9MP1NcKAG8Lfw8AdI4zcHBwcHBwcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBwyMlwbwtw4gI1MzECAnYUEQEHsFG70RIB/PhBbo4q7UTQ0//TP9MA0//T/9MH0wf0BPQF+G34bPhv+G74a/hqf/hh+Gb4Y/hi3tFwcHBwcHU1gCA0ggP0gDOCCA9CQDL4TzHIghBtKN3oghCAAAAAsc8LHyXPCwckzwsHI88LPyLPC38hzwsHyIJYYAAAAAAAAAAAAAAAABMAqM8LZiHPMYEDmLmWcc9AIc8XlXHPQSHN4iDJcfsAW18FwP+OLPhCyMv/+EPPCz/4Rs8LAPhK+Ev4TvhP+Ez4TV5Qy//L/8sHywf0APQAye1U3n/4ZwEHsDzSeRUB+vhBbo5e7UTQINdJwgGOJ9P/0z/TANP/0//TB9MH9AT0Bfht+Gz4b/hu+Gv4an/4Yfhm+GP4Yo4q9AVw+Gpw+Gtt+Gxt+G1w+G5w+G9wAYBA9A7yvdcL//hicPhjcPhmf/hh4t74RpLyM5Nx+Gbi0x/0BFlvAgHTB9H4RSBuFgH+kjBw3vhCuvLgZCFvEMIAIJcwIW8QgCC73vLgdfgAISFwcCNvIjGAIPQO8rLXC//4aiJvEHCbICK5IJUwIoAgud6ONSAlbyIxgCD0DvKy1wv/IPhNgQEA9A4gkTHes44VIyCkNfhNIgFVAcjLB1mBAQD0Q/ht3jCk6DAhI7uRIRcAdJEi4vhvIfhuXwRb+ELIy//4Q88LP/hGzwsA+Er4S/hO+E/4TPhNXlDL/8v/ywfLB/QA9ADJ7VR/+GcCASAlGQIBICEaAgFmHhsBmbABsLPwgt0cVdqJoaf/pn+mAaf/p/+mD6YP6AnoC/Db8Nnw3/Dd8Nfw1P/ww/DN8Mfwxb2i4NreBfCbAgIB6Q0qA64WDv8m4ODhxSJBHAH+jjcjIiRvAm8iyCLPCwchzwv/MTEBbyIhpANZgCD0Q28CNCL4TYEBAPR8lQHXCwd/k3BwcOICNTMx6F8DyIIQWwDYWYIQgAAAALHPCx8hbyICyx/0AMiCWGAAAAAAAAAAAAAAAADPC2YhzzGBA5i5lnHPQCHPF5Vxz0EhzeIgyR0AcnH7AFswwP+OLPhCyMv/+EPPCz/4Rs8LAPhK+Ev4TvhP+Ez4TV5Qy//L/8sHywf0APQAye1U3n/4ZwEHsMgZ6R8B/vhBbo4q7UTQ0//TP9MA0//T/9MH0wf0BPQF+G34bPhv+G74a/hqf/hh+Gb4Y/hi3tTRyIIQfXKcyIIQf////7DPCx8hzxTIglhgAAAAAAAAAAAAAAAAzwtmIc8xgQOYuZZxz0AhzxeVcc9BIc3iIMlx+wBbMPhCyMv/+EPPCz8gAEr4Rs8LAPhK+Ev4TvhP+Ez4TV5Qy//L/8sHywf0APQAye1Uf/hnAbu2JwNDfhBbo4q7UTQ0//TP9MA0//T/9MH0wf0BPQF+G34bPhv+G74a/hqf/hh+Gb4Y/hi3tFwbW8CcHD4TIBA9IaOGgHTP9Mf0wfTB9P/0wf6QNN/0w/U1woAbwt/gIgF4jjNwcHBwcHBwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcHDIyXBvC3DiAjQwMZEgIwH2jnAiIsjLPwFvIiGkA1mAIPRDbwIzIfhMgED0fI4aAdM/0x/TB9MH0//TB/pA03/TD9TXCgBvC3+OM3BwcHBwcHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwcMjJcG8LcOICNDAx6FvIghBQnA0NJADqghCAAAAAsc8LHyFvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZiHPMYEDmLmWcc9AIc8XlXHPQSHN4iDJcfsAWzDA/44s+ELIy//4Q88LP/hGzwsA+Er4S/hO+E/4TPhNXlDL/8v/ywfLB/QA9ADJ7VTef/hnAQm5ncyNkCYB/PhBbo4q7UTQ0//TP9MA0//T/9MH0wf0BPQF+G34bPhv+G74a/hqf/hh+Gb4Y/hi3vpBldTR0PpA39cNf5XU0dDTf9/XDACV1NHQ0gDf1w0HldTR0NMH39TR+E7AAfLgbPhFIG6SMHDe+Eq68uBk+AAjJSTIz4WAygBzz0DOAScArvoCgGrPQCHQyM4BIc8xIc81vJTPg88RlM+BzxPiySL7AF8FwP+OLPhCyMv/+EPPCz/4Rs8LAPhK+Ev4TvhP+Ez4TV5Qy//L/8sHywf0APQAye1U3n/4ZwIBSD0pAgEgMioCASAtKwHLtfAocemP6YPouBEREJCQuNqPkVZYYYAYmJiYmKqILeRBCA/wKHHBCEAAAABY54WPkOeFAGRBLDAAAAAAAAAAAAAAAABnhbMQ55jAgcxcyzjnoBDni8q456CQ5vEQZLj9gC2YYH/ALABkjiz4QsjL//hDzws/+EbPCwD4SvhL+E74T/hM+E1eUMv/y//LB8sH9AD0AMntVN5/+GcBCbVToHbALgL++EFujirtRNDT/9M/0wDT/9P/0wfTB/QE9AX4bfhs+G/4bvhr+Gp/+GH4Zvhj+GLe0z/R+EUgbpIwcN4g+E2BAQD0DiCUAdcLB5Fw4iHy4GQxMY6A2CH4TIBA9A4gjhkB0z/TH9MH0wfT/9MH+kDTf9MP1NcKAG8LkW3iIfLgZjkvAfwgbxEjISEhcbUfIqywwwAxMTExs/LgZ/gAIyEkIW8TcaAibxK+jlchbxcibxYjbxrIz4WAygBzz0DOAfoCgGrPQCJvGdDIzgEhzzEhzzW8lM+DzxGUz4HPE+LJIm8Y+wD4SyJvFSFxeCOorKExMfhr+EwjASEBgED0WzAx+GwwAf6OWSFvESFxtR8hrCIBsTIhMTEiAW9RMiEgbxOkb1My+EwjASNvK8grzws/Ks8LHynPCwcozwsHJ88L/ybPCwclzxYkzwt/I88LDyLPFCHPCgALXwtZgED0Q/hs4l8DXwT4QsjL//hDzws/+EbPCwD4SvhL+E74T/hM+E1eUMv/MQAgy//LB8sH9AD0AMntVH/4ZwLvtsdgs34QW6OKu1E0NP/0z/TANP/0//TB9MH9AT0Bfht+Gz4b/hu+Gv4an/4Yfhm+GP4Yt76QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39cMAJXU0dDSAN/U0XCOgNjIghATHYLNghCAAAAAsc8LHyHPCz/IgNDMAuoJYYAAAAAAAAAAAAAAAAM8LZiHPMYEDmLmWcc9AIc8XlXHPQSHN4iDJcfsAWzD4QsjL//hDzws/+EbPCwD4SvhL+E74T/hM+E1eUMv/y//LB8sH9AD0AMntVH/4ZwLq+EUgbpIwcN4gIPhNgQEA9A4glAHXCweRcOIh8uBkMTEmgggPQkC+8uBrI9BtAXBxjhEi10qUWNVapJUC10mgAeIibuZYMCGBIAC5IJQwIMEI3vLgeY6A2PhLIyF4IqitgQD/sLUHMTF1ufLgcfgAKCdycbEhOTUBqp1ygQCAsTH4J28QtX8z3iAjVSFfA/hPIMABjjQhLSzIz4WAygBzz0DOAfoCgGrPQCnQyM4BIc8xIc81vJTPg88RlM+BzxPiySP7AF8NcNswjoDjBNk2AXb4SyYhcXgjqKygMTH4a/gjtT+AIKz4JYIQ/////7CxIHAjcCsrVhMpK1YSVhVvCyEhKSFvE3GgIm8SvjcBso5XIW8XIm8WI28ayM+FgMoAc89AzgH6AoBqz0AibxnQyM4BIc8xIc81vJTPg88RlM+BzxPiySJvGPsA+EsibxUhcXgjqKyhMTH4a/hMIwEhAYBA9FswMfhsOADIjlkhbxEhcbUfIawiAbEyITExIgFvUTIhIG8TpG9TMvhMIwEjbyvIK88LPyrPCx8pzwsHKM8LByfPC/8mzwsHJc8WJM8LfyPPCw8izxQhzwoAC18LWYBA9EP4bOJfAyEPXw/bMAHu+CO1P4ID9IChgCCs+EyAQPSGjhoB0z/TH9MH0wfT/9MH+kDTf9MP1NcKAG8Lf44zcHBwcHBwcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBwyMlwbwtw4iAglDAiJLveILOUXwXbMOD4AHA6AXqZISCVMCCAKLnejoDo+ELIy//4Q88LP/hGzwsA+Er4S/hO+E/4TPhNXlDL/8v/ywfLB/QA9ADJ7VT4D18GOwH8pPhLJG8VIXF4I6isoTEx+Gv4TCUBIQGAQPRbMDH4bCT4TIBA9HyOGgHTP9Mf0wfTB9P/0wf6QNN/0w/U1woAbwt/jjNwcHBwcHBwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcHDIyXBvC3DiAjc1MyIgPAAOlDAkJrveMgIBIEE+AeG2tmgjvhBbo4q7UTQ0//TP9MA0//T/9MH0wf0BPQF+G34bPhv+G74a/hqf/hh+Gb4Y/hi3tM/0XBwcHBwcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBwyMlwbwsh+EyAQPQOIID8B/o4ZAdM/0x/TB9MH0//TB/pA03/TD9TXCgBvC5Ft4iHy4GYgM1UCXwPIghAK2aCOghCAAAAAsc8LHyFvK1UKK88LPyrPCx8pzwsHKM8LByfPC/8mzwsHJc8WJM8LfyPPCw8izxQhzwoAC18LyIJYYAAAAAAAAAAAAAAAAM8LZiFAAJ7PMYEDmLmWcc9AIc8XlXHPQSHN4iDJcfsAWzDA/44s+ELIy//4Q88LP/hGzwsA+Er4S/hO+E/4TPhNXlDL/8v/ywfLB/QA9ADJ7VTef/hnAGrbcCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+Q4VMRwACQ4MEDIoIQ/////byxkOAB8AH4R26Q3g==",
    codeHash: "75b495cd6ca8d96d57114882c8f56093d5cc3d50e36de1c1e9fc3636cc8d7b70",
};
module.exports = { SafeMultisigWallet72Contract };