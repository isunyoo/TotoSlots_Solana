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

  // it('Update MySlotsData!', async () => {
  //   // generate a random number
  //   const rnd = Math.floor(Math.random() * 255);
  //   const message = "Updated number is :" +rnd; 

  //   const tx = await program.rpc.updateSlotData(
  //     rnd, message, 
  //     {
  //         accounts : {
  //           slotAccount : myDataAccountAddress,
  //           owner : provider.wallet.publicKey,
  //         }
  //     }
  //   );
  //   console.log("Your transaction signature:", tx);
  //   printMyData(myDataAccountAddress, program);
  // });

  it('Update MySlotsData!', async () => {
    // generate a random number
    const rnd = Math.floor(Math.random() * 45);
    const message = "Updated number is :" +rnd; 
    const uid = "MpaacJXm6MygMPDnktj"
    const name = "Sunny Yoo"
    const email = "isunyoo@gmail.com"
    const slots = [[rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd]];
    // slots.insert(0, [rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd])
    // let slots = &mut slots.push(1);
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
  //  console.log("Data of account:", myDataAccAddress.toBase58());
  //  console.log("Random Number :", myDataAcc.number.toString() );
  //  console.log("Message :", myDataAcc.message);
  //  console.log("Owner :", myDataAcc.owner.toBase58());

  console.log("UID :", myDataAcc.uid);
  console.log("Name :", myDataAcc.name);
  console.log("Email :", myDataAcc.email);
  console.log("Slots :", myDataAcc.slots);
  console.log("Time :", myDataAcc.time);
  console.log("Data of account:", myDataAccAddress.toBase58());  
  console.log("Owner :", myDataAcc.owner.toBase58());
}