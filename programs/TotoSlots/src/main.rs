// https://github.com/solana-labs/solana-program-library

use std::io;
use rand::Rng; // rand = "0.8.5" dependencies
use anchor_lang::prelude::*;
// use crate::state::SlotAccountData;
use toto_slots::toto_slots::init_slot_account;

fn main() {
    // Read the user input
    let mut input_num = 0;
    println!("How many slots to generate: ");
    let mut input_text = String::new();
    io::stdin()
        .read_line(&mut input_text)
        .expect("failed to read from stdin");
    let trimmed = input_text.trim();
    match trimmed.parse::<u32>() {
        // Ok(i) => println!("your integer input: {}", i),
        Ok(i) => input_num = i,
        Err(..) => println!("this was not an integer: {}", trimmed),
    };

    // Generate random number in the range [0, 45]
    let num = rand::thread_rng().gen_range(0..46);
    // println!("{}", num);

    // Vector Array to store slots data
    let mut v = vec![];
    for i in 0..input_num{
        v.insert(i.try_into().unwrap(), [ &num, &num, &num, &num, &num, &num ]);
        }
    println!("Vector Length: {:?}", v.len());
    println!("Vector Output Object: {:?}", v);
    // println!("{:?}", v[0]);
    let s = format!("{:?}", &v);
    println!("Vector Output Convert to String Object: {}", s);


    let _u = solana_program::pubkey!("Et2tm6NsfBZJbEYXtWTv9k51V4tWtQvufexSgXoDRGVA");

    // // #### Functions ####
    // println!("{}", print_data(3));
    // println!("{}", print_data(4));

    //Configure the client to use the local cluster.
    // let provider =  anchor.AnchorProvider.env();
    // anchor.setProvider(provider);
    // let program = anchor.workspace.TotoSlots as Program<TotoSlots>;

    // let tx = program.rpc.initSlotAccount(
    //     {
    //         accounts : {
    //           slotAccount : myDataAccountAddress,
    //           owner : provider.wallet.publicKey,
    //           systemProgram : anchor.web3.SystemProgram.programId,
    //         },
    //         signers : [myDataAccountSigner],
    //     }
    //   ).await;
    //   println!("Your transaction signature", tx);
    //   printMyData(myDataAccountAddress, program);

}

// #[async_std::main]
// async fn main() -> web3::Result<()> {
//     let transport = web3::transports::Http::new("http://localhost:8899")?;
//     let web3 = web3::Web3::new(transport);

//     println!("Calling accounts.");
//     let mut accounts = web3.eth().accounts().await?;
//     println!("Accounts: {:?}", accounts);
//     accounts.push("00a329c0648769a73afac7f9381e08fb43dbea72".parse().unwrap());

//     println!("Calling balance.");
//     for account in accounts {
//         let balance = web3.eth().balance(account, None).await?;
//         println!("Balance of {:?}: {}", account, balance);
//     }

//     Ok(())
// }

// #### Functions ####
// pub fn print_data(num: u8) -> bool{
//     let digit: u8 = num % 2;
//     digit == 0 // return bool
//     println!("UID :", myDataAcc.uid);
//     println!("Name :", myDataAcc.name);
//     println!("Email :", myDataAcc.email);
//     println!("Slots :", myDataAcc.slots);
//     println!("Time :", myDataAcc.time);
//     println!("Data of account:", myDataAccAddress.toBase58());  
//     println!"Owner :", myDataAcc.owner.toBase58());
// }


use anchor_lang::solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {

    msg!("Hello, world!");

    Ok(())
}