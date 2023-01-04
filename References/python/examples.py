https://michaelhly.github.io/solana-py/

$ pyenv virtualenv solana_tools
$ pyenv activate solana_tools
$ pip install solana
$ pip install asyncstdlib
$ python

API Client(solana.rpc.api)
https://michaelhly.github.io/solana-py/rpc/api/
>>> from solana.publickey import PublicKey
>>> from solana.rpc.api import Client
>>> solana_client = Client("http://localhost:8899")
>>> solana_client.get_account_info(PublicKey(0)).value
>>> solana_client.get_account_info_json_parsed(PublicKey(0)).value.owner
>>> solana_client.get_balance(PublicKey(0)).value
>>> solana_client.get_block(169728).value.blockhash
>>> solana_client.get_block_commitment(169728).total_stake
>>> solana_client.get_block_height().value
>>> solana_client.get_block_time(170241).value
>>> solana_client.get_blocks(170230, 170241).value  // Returns a list of confirmed blocks.
>>> solana_client.get_cluster_nodes().value[0].tpu  // Returns information about all the nodes participating in the cluster.
>>> solana_client.get_epoch_info().value.epoch  // Returns information about the current epoch.
>>> solana_client.get_epoch_schedule().value.slots_per_epoch  // Returns epoch schedule information from this cluster's genesis config.
>>> solana_client.get_first_available_block().value  // Returns the slot of the lowest confirmed block
>>> solana_client.get_genesis_hash().value  // Returns the genesis hash.
>>> solana_client.get_identity().value.identity  // Returns the identity pubkey for the current node.
>>> solana_client.get_inflation_governor().value.foundation  // Returns the current inflation governor.
>>> solana_client.get_inflation_rate().value.epoch  // Returns the specific inflation values for the current epoch.
>>> solana_client.get_largest_accounts().value[0].lamports  // Returns the 20 largest accounts, by lamport balance.
>>> solana_client.get_latest_blockhash().value  // Returns the latest block hash from the ledger.
>>> list(solana_client.get_leader_schedule().value.items())[0]  // Returns the leader schedule for an epoch.
>>> solana_client.get_minimum_balance_for_rent_exemption(50).value  // Returns minimum balance required to make account rent exempt.
>>> solana_client.get_minimum_ledger_slot().value  // Returns the lowest slot that the node has information about in its ledger.


Returns the fee for a message.
>>> from solana.keypair import Keypair
>>> from solana.system_program import TransferParams, transfer
>>> from solana.transaction import Transaction
>>> sender, receiver = Keypair.from_seed(bytes(PublicKey(0))), Keypair.from_seed(bytes(PublicKey(1)))
>>> txn = Transaction().add(transfer(TransferParams(from_pubkey=sender.public_key, to_pubkey=receiver.public_key, lamports=1000)))
>>> solana_client = Client("http://localhost:8899")
>>> solana_client.get_fee_for_message(txn.compile_message()).value


Async API Client(solana.rpc.async_api)
>>> import asyncio
>>> from solana.rpc.async_api import AsyncClient
>>> async def main():
...     async with AsyncClient("http://localhost:8899") as client:
...         res = await client.is_connected()
...     print(res)
...
>>>
>>> asyncio.run(main())