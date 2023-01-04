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
> anchor deploy --provider.cluster https://solana-devnet.g.alchemy.com/v2/<YOUR-API-KEY>
> solana address -k "target/deploy/toto_slots-keypair.json"
   EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
> solana program deploy target/deploy/toto_slots.so
   Program Id: EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm
> yarn add ts-mocha
> anchor run test
> anchor run custom-script
> anchor test --skip-local-validator
> anchor test --provider.cluster https://solana-devnet.g.alchemy.com/v2/<YOUR-API-KEY>

> pyenv shell solana_tools
> cd tests
> pip install anchorpy
> python TotoSlots.py


Source Code example
https://blog.techchee.com/simple-tutorial-on-solana-rust-smart-contract-with-anchor-framework/
https://github.com/ketyung/my_sol_data


$ solana address
$ solana airdrop 10
$ solana balance
$ solana config get
$ solana config set --url localhost