// Program Account – state.rs
use anchor_lang::prelude::*;

#[account]
pub struct SlotAccountData {
    pub uid: String,
    pub name: String,
    pub email: String,
    // pub slots: [[u8; 6]; 10],
    pub slots: String,
    pub time: String,
    pub data_account_address: String,
    pub owner: Pubkey,
}