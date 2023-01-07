> cd /Users/syoo/Documents/SourceCodes/Solana
> solana-test-validator
> solana-test-validator --reset

> anchor init TotoSlots
> cd TotoSlots
> solana-keygen new -o target/deploy/TotoSlots-keypair.json
> solana address -k "target/deploy/TotoSlots-keypair.json"
   Ak7RMyJRfmRrTkKG4DaMmcxVwVGJgRCsBHThPNK32up
> anchor build
> anchor deploy
> anchor deploy --provider.cluster localnet|devnet
 Program path: /home/syoo/Documents/BlockChain/Solana/TotoSlots_Solana/target/deploy/toto_slots.so...
 Program Id: EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
 Deploy success : https://explorer.solana.com/address/EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm?cluster=devnet
> anchor deploy --provider.cluster https://solana-devnet.g.alchemy.com/v2/<YOUR-API-KEY>
> solana address -k "target/deploy/toto_slots-keypair.json"
   EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
> solana program deploy target/deploy/toto_slots.so
   Program Id: EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
> yarn add ts-mocha
> anchor run test --provider.cluster localnet|devnet
 My Data Account Address : 2GCR3eAoZ2iHWrRupR6wGtB4fthtnJTfbM1eCD64ZzsY
 https://explorer.solana.com/address/2GCR3eAoZ2iHWrRupR6wGtB4fthtnJTfbM1eCD64ZzsY?cluster=devnet
 Your transaction signature: hkvHcHT4HikzWEwArNdiSPNRLXTqHQUUx7A5bkz22cfeoSPrPvavQuN44uZKi8JFUBHea8CBHvckzB2si1ShwZb
 https://explorer.solana.com/tx/hkvHcHT4HikzWEwArNdiSPNRLXTqHQUUx7A5bkz22cfeoSPrPvavQuN44uZKi8JFUBHea8CBHvckzB2si1ShwZb?cluster=devnet
> anchor run custom-script-test
> anchor test --skip-local-validator
> anchor test --provider.cluster https://solana-devnet.g.alchemy.com/v2/<YOUR-API-KEY>

> pyenv shell solana_tools
> cd tests
> pip install anchorpy
> python TotoSlots.py


Source Code example
https://blog.techchee.com/simple-tutorial-on-solana-rust-smart-contract-with-anchor-framework/
https://github.com/ketyung/my_sol_data



$ solana-keygen new
$ solana address
$ solana address -k ~/.config/solana/id.json
Newly generated public and private keys to be stored in a specific file:
$ solana-keygen new --outfile ~/solana/my_wallet.json 
$ solana-keygen pubkey ~/.config/solana/id.json
$ solana airdrop 10
$ solana airdrop 1 <RECIPIENT_ACCOUNT_ADDRESS> --url https://api.devnet.solana.com
$ solana transfer <RECIPIENT_ACCOUNT_ADDRESS> 1 -allow-unfunded-recipient
$ solana balance
$ solana config get
$ solana config set --url localnet|devnet


Deploy a Solana Program[https://docs.solana.com/cli/deploy-a-program]
$ solana program deploy --program-id <KEYPAIR_FILEPATH> <PROGRAM_FILEPATH>
$ solana program deploy --program-id target/deploy/toto_slots-keypair.json target/deploy/toto_slots.so
$ solana program show <Program Id>
$ solana program show EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
 Program Id: EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
 Owner: BPFLoaderUpgradeab1e11111111111111111111111
 ProgramData Address: 3oFbqUvf6MG6wmasKsFhoJ2oo8oYz7K6HesdMuMj5fPH
 Authority: Biip5kBdDVpEMKA6ss9kz3qUpgjzY3Qd55W5rBZNcWsp
 Last Deployed In Slot: 186932716
 Data Length: 403952 (0x629f0) bytes
 Balance: 2.81271 SOL
$ solana program deploy <PROGRAM_FILEPATH>
$ solana program deploy --max-len 200000 target/deploy/toto_slots.so
$ solana-keygen recover -o <KEYPAIR_PATH>
$ solana-keygen recover -o target/deploy/toto_slots-keypair.json
$ solana program deploy --buffer <KEYPAIR_PATH> <PROGRAM_FILEPATH>
$ solana program deploy --buffer target/deploy/toto_slots-keypair.json target/deploy/toto_slots.so
$ solana program show --programs
 Program Id                                   | Slot      | Authority                                    | Balance
 EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm | 186932716 | Biip5kBdDVpEMKA6ss9kz3qUpgjzY3Qd55W5rBZNcWsp | 2.81271 SOL
$ solana program show --buffers
 Buffer Address                               | Authority                                    | Balance
To close all the buffer accounts associated with the current authority:
$ solana program close --buffers
To show all buffer accounts regardless of the authority
$ solana program show --buffers --all

