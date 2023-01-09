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
    // pub slots: [[u8; 6]; 10],
    pub slots: String,
    pub time: String,
    pub data_account_address: String,
    pub owner: Pubkey,
}

// https://doc.rust-lang.org/std/vec/struct.Vec.html

// let width = 4;
// let height = 4;
// let mut array = vec![vec![0; width]; height];

// array[2][2] = 5;
// println!("{:?}", array);
// 0 0 0 0
// 0 0 0 0
// 0 0 5 0
// 0 0 0 0

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