from solana.rpc.api import Client
from solana.account import Account
from solana.system_program import TransferParams, transfer
from solana.transaction import Transaction
#Make sure to paste sender, reciever addresses and public key.
solana_client = Client("http://sample-endpoint-name.network.quiknode.pro/token-goes-here/")
sender, reciever = Account(1), Account(2)
json_request = solana_client.get_recent_blockhash()
recent_blockhash = json_request["result"]["value"]["blockhash"]
txn = Transaction(fee_payer=sender.public_key(), recent_blockhash=recent_blockhash)
txn.add(
    transfer(
        TransferParams(
            from_pubkey=sender.public_key(),
            to_pubkey=reciever.public_key(), 
            lamports=1000
        )
    )
)
txn.sign(sender)
print(solana_client.simulate_transaction(txn))