# import asyncio
# from solana.rpc.async_api import AsyncClient
# from solana.publickey import PublicKey
# from anchorpy import Program, Provider, Wallet

# async def main():
#     client = AsyncClient("http://127.0.0.1:8899")
#     provider = Provider(client, Wallet.local())
#     # load the Serum Swap Program (not the Serum dex itself).
#     program_id = PublicKey("EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm")
#     program = await Program.at(
#         program_id, provider
#     )
#     print(program.idl.name)  # swap
#     await program.close()

# asyncio.run(main())


from pathlib import Path
import asyncio
import json
from solana.publickey import PublicKey
from anchorpy import Idl, Program

async def main():
    # Read the generated IDL.
    with Path("../target/idl/toto_slots.json").open() as f:
        raw_idl = json.load(f)
    idl = Idl.from_json(raw_idl)
    # Address of the deployed program.
    program_id = PublicKey("EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm")
    # Generate the program client from IDL.
    async with Program(idl, program_id) as program:
        # Execute the RPC.
        await program.rpc["init_slot_account"]()
    # If we don't use the context manager, we need to
    # close the underlying http client, otherwise we get warnings.
    await program.close()

asyncio.run(main())


# # Opening JSON file and returns JSON object as a dictionary
# with open('../build/contracts/TotoSlots.json') as keyfile:  
#   info_json = json.load(keyfile)
#   ABI = info_json["abi"]
#   BYTECODE = info_json["bytecode"]
#   # Development Network
#   # CONTRACT_ADDRESS = info_json["networks"]["4447"]["address"]
#   # Ropsten Network
#   CONTRACT_ADDRESS = info_json["networks"]["3"]["address"]
#   # print("abi file: ", ABI)  
#   # print("contract address: ", CONTRACT_ADDRESS)
#   contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=ABI, bytecode=BYTECODE)
#   keyfile.close