// The Instruction Wrappers – ins.rs
use anchor_lang::prelude::*;
use crate::state::SlotAccountData;

#[derive(Accounts)]
pub struct InitSlotAccountData<'info> {
    // #[account(
    //     init, // 1. Hey Anchor, initialize an account with these details for me
    //     payer = owner, // 2. See that authority Signer (pubkey) down there? They're paying for this
    //     space = 8 // 3.A) all accounts need 8 bytes for the account discriminator prepended to the account
    //     + 566 // 3.B) latest_post(Vec<u8>): post bytes could need up to 566 bytes for the memo
    //     + 32 // 3.C) authority: Pubkey needs 32 bytes
    //     You have to do this math yourself, there's no macro for these(u8: 1, u128: 128, String: 50, [u8; 6]: 566)
    // )]
    #[account(init, payer = owner, space = 8 + 50 + 50 + 50 + 566 + 50 + 50 + 32)]
    pub slot_account: Account<'info, SlotAccountData>, // 1. <--- initialize this account variable & add it to Context.accounts.blog_account can now be used above in our initialize function
    #[account(mut)]
    pub owner: Signer<'info>, // 5. <--- let's name the account that signs this transaction "authority" and make it mutable so we can set the value to it in `initialize` function above
    pub system_program: Program<'info, System>, // <--- Anchor boilerplate
}

#[derive(Accounts)]
pub struct UpdateSlotAccountData<'info> {
    #[account(mut,has_one=owner)]
    pub slot_account: Account<'info, SlotAccountData>,
    pub owner: Signer<'info>
}
