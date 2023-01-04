// Program Account – state.rs
use anchor_lang::prelude::*;

#[account]
// pub struct SlotAccountData {
//     pub number: u8,   
//     pub message: String,
//     // pub latest_post: Vec<u8>, 
//     pub owner: Pubkey,
// }

pub struct SlotAccountData {
    pub uid: String,
    pub name: String,
    pub email: String,
    // pub slots_data: Vec<u8>, 
    pub slots: [u8; 6],
    pub time: String,
    pub data_account_address: String,
    pub owner: Pubkey,
}


// struct TotoSlotsData {        
//     // Declaring different structure elements
//     address issuerAddress;
//     string issuerUID;
//     string issuerName;
//     string issuerEmail;        
//     uint[6][] slotsData;        
//     string createdTime;   
//     uint256 createdBlockTime;        
// }