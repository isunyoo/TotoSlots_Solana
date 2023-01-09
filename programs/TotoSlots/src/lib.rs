// Processor – lib.rs
pub mod ins;
pub mod state;

use anchor_lang::prelude::*;
use ins::*;
//replace the program id that you get after deploying the program
declare_id!("EgjsT9zhSjfrTMXo3vN5Evp5iSA4RWu6BdKk1oMj3ALm");

#[program]
pub mod toto_slots {
    use anchor_lang::solana_program::entrypoint::ProgramResult;
    use super::*;

    pub fn init_slot_account(ctx: Context<InitSlotAccountData>) -> ProgramResult { 

        let acc = &mut ctx.accounts.slot_account; // grab a mutable reference to our SlotAccount struct
        // acc.number = 0;
        // acc.message = String::from("MySlotAccoutData initialized!");
        acc.uid = String::from("Initialized!");
        acc.name = String::from("Initialized!");
        acc.email = String::from("Initialized!");
        acc.time = String::from("Initialized!");
        // acc.slots = [[0; 6]; 10];
        acc.slots = String::from("Initialized!");
        acc.data_account_address = String::from("Initialized!");
        // Store the public key of the signer to the owner field of SlotAccountData
        acc.owner = ctx.accounts.owner.key(); // set the SlotAccountData.owner to the pubkey of the owner

        Ok(()) // return the Result
    }

    // pub fn update_slot_data(ctx: Context<UpdateSlotAccountData>, number: u8, message: String) -> ProgramResult {
    // pub fn update_slot_data(ctx: Context<UpdateSlotAccountData>, uid: String, name: String, email: String, slots: [[u8; 6]; 10], time: String, data_account_address: String) -> ProgramResult {
    pub fn update_slot_data(ctx: Context<UpdateSlotAccountData>, uid: String, name: String, email: String, slots: String, time: String, data_account_address: String) -> ProgramResult {

        let acc = &mut ctx.accounts.slot_account;
        // acc.number = number;
        // acc.message = message;
        acc.uid = uid;
        acc.name = name;
        acc.email = email;
        acc.slots = slots;
        // acc.slots.insert(slots);
        acc.time = time;
        acc.data_account_address = data_account_address;

        Ok(())
    }
}