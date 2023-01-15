import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TotoSlots } from "../target/types/toto_slots";

describe("TotoSlots", () => {
  // Configure the client to use the local cluster.
  // let provider = anchor.setProvider(anchor.AnchorProvider.env());
  // let provider = anchor.Provider.env();
  // anchor.setProvider(provider);
  const provider =  anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.TotoSlots as Program<TotoSlots>;

  let myDataAccountSigner = anchor.web3.Keypair.generate();
  let myDataAccountAddress = myDataAccountSigner.publicKey;
  // console.log("My Data Account Signer :", myDataAccountSigner);
  console.log("My Data Account Address :", myDataAccountAddress.toBase58());

  it("Is initialized!", async () => {
    // Add your test here.
    // const tx = await program.methods.initialize().rpc();
    const tx = await program.rpc.initSlotAccount(
      {
          accounts : {
            slotAccount : myDataAccountAddress,
            owner : provider.wallet.publicKey,
            systemProgram : anchor.web3.SystemProgram.programId,
          },
          signers : [myDataAccountSigner],
      }
    );
    console.log("Your transaction signature", tx);
    printMyData(myDataAccountAddress, program);
  });

  it('Update MySlotsData!', async () => {
    let total_slots_num = 5;
    let slots_arr: string[] = [];
    for (let i = 0; i < total_slots_num; i++) {
      // generate an unique random number[1~45]
      var slot = [];
      while(slot.length < 6) {
        var r = Math.floor(Math.random() * 45) + 1;
        if(slot.indexOf(r) === -1) slot.push(r);
      }
      // console.log(slot);
      // sort the array using a function
      slot.sort(function(a, b){
        // return b - a; // sort in descending order
        return a - b; // sort in ascending order
      })
      slots_arr.push('['+slot+']');   
    }
    // console.log(slots_arr);
    const uid = "MpaacJXm6MygMPDnktj"
    const name = "Sunny Yoo"
    const email = "isunyoo@gmail.com"
    const slots = slots_arr.toString();
    const time = new Date().toISOString().toString();
    const data_account_address = myDataAccountAddress.toBase58();
    const tx = await program.rpc.updateSlotData(
      uid, name, email, slots, time, data_account_address, 
      {
          accounts : {
            slotAccount : myDataAccountAddress,
            owner : provider.wallet.publicKey,
          }
      }
    );
    console.log("Your transaction signature:", tx);
    printMyData(myDataAccountAddress, program);
  });

});

async function printMyData (myDataAccAddress : anchor.web3.PublicKey , program : Program<TotoSlots>){

   const myDataAcc = await program.account.slotAccountData.fetch(myDataAccAddress);
  console.log("UID :", myDataAcc.uid);
  console.log("Name :", myDataAcc.name);
  console.log("Email :", myDataAcc.email);
  console.log("Slots :", myDataAcc.slots);
  console.log("Time :", myDataAcc.time);
  console.log("Data of account:", myDataAccAddress.toBase58());  
  console.log("Owner :", myDataAcc.owner.toBase58());
}