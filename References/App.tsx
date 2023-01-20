import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo } from 'react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Program, AnchorProvider, web3, BN } from '@project-serum/anchor';
import idl from './idl.json';

require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Context>
            <center><h1>How many games to generate?</h1></center>
            <center><input type="number" min="0" name="slotnums" placeholder="Number of slots" onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}/></center>
            <Content />
        </Context>
    );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Wallets that implement either of these standards will be available automatically.
             *
             *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
             *     (https://github.com/solana-mobile/mobile-wallet-adapter)
             *   - Solana Wallet Standard
             *     (https://github.com/solana-labs/wallet-standard)
             *
             * If you wish to support a wallet that supports neither of those standards,
             * instantiate its legacy wallet adapter here. Common legacy adapters can be found
             * in the npm package `@solana/wallet-adapter-wallets`.
             */
            new PhantomWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    const wallet = useAnchorWallet();
    const baseAccount = web3.Keypair.generate();

    function getProvider() {
        if (!wallet) {
            return null;
        }
        // create the provider and return it to the caller
        // network set to local network for now
        const network = "http://127.0.0.1:8899";
        const connection = new Connection(network, "processed");
    
        // const provider = new AnchorProvider(connection, wallet, {"preflightCommitment": "processed"});
        const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
        return provider;
    }

    async function initSlotAccount() {
        const provider = getProvider()
        if (!provider) {
            // eslint-disable-next-line
            throw("Provider is null");
        }

        // create the program interface combining the idl, program ID and provider
        // Bug with default importing when handling string value types, fix by pre-con
        const a = JSON.stringify(idl);
        const b = JSON.parse(a);
        // const program = new Program(contractJson, programID, provider);
        const program = new Program(b, idl.metadata.address, provider);
        // console.log('Program: ', program)
        try{
            // interact with the program via rpc
            // await program.rpc.initSlotAccount({
            //     accounts: {
            //         slotAccount: baseAccount.publicKey,
            //         owner: provider.wallet.publicKey,
            //         systemProgram: web3.SystemProgram.programId,
            //     },
            //     signers: [baseAccount]
            // });
            let tx = await program.methods.initSlotAccount().accounts({
                slotAccount: baseAccount.publicKey,
                owner: provider.wallet.publicKey,
                systemProgram: web3.SystemProgram.programId,
                }).signers([baseAccount]).rpc();
            console.log('InitializedTx: ', tx);
        
            // console.log('Owner PublicKey: ', provider.wallet.publicKey.toBase58());
            const data = await program.account.slotAccountData.fetch(baseAccount.publicKey);
            console.log('InitSlotData: ', data);

        // const transaction = new web3.Transaction().add(
        //     web3.SystemProgram.transfer({
        //     fromPubkey: baseAccount.publicKey,
        //     toPubkey: provider.wallet.publicKey,
        //     lamports: web3.LAMPORTS_PER_SOL / 100,
        //     })
        // );
        // console.log(await solana.simulateTransaction(transaction, [baseAccount]));

        } catch (err) {
            console.log("Transaction error: ", err);
        }
    }

    async function updateSlotAccount() {
        const provider = getProvider()
        if (!provider) {
            // eslint-disable-next-line
            throw("Provider is null");
        }

        // BUFFER IS DEFINED IN REACT-REACTJS
        window.Buffer = window.Buffer || require("buffer").Buffer;

        // create the program interface combining the idl, program ID and provider
        // Bug with default importing when handling string value types, fix by pre-con
        const a = JSON.stringify(idl);
        const b = JSON.parse(a);
        // const program = new Program(contractJson, programID, provider);
        const program = new Program(b, idl.metadata.address, provider);
        // console.log('Program: ', program)


        // Generate Random Slots
        let total_slots_num = 5;
        let input_num = document.getElementById('slotnums');
        console.log("Input Number: ", input_num);
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


        const uid = "MpaacJXm6MygMPDnktj"
        const name = "Sunny Yoo"
        const email = "isunyoo@gmail.com"
        const slots = slots_arr.toString();
        const time = new Date().toISOString().toString();
        const data_account_address =  provider.wallet.publicKey.toBase58();
        try{
            // interact with the program via rpc
            // Initialize Slot Account
            // await program.methods.initSlotAccount().accounts({
            //     slotAccount: baseAccount.publicKey,
            //     owner: provider.wallet.publicKey,
            //     systemProgram: web3.SystemProgram.programId,
            //     }).signers([baseAccount]).rpc();

            // let tx = await program.rpc.updateSlotData(uid, name, email, slots, time, data_account_address, {
            //     accounts: {
            //         slotAccount: baseAccount.publicKey,
            //         owner: provider.wallet.publicKey,
            //     },
            // });
            let tx = await program.methods.updateSlotData(uid, name, email, slots, time, data_account_address).accounts({
                slotAccount: baseAccount.publicKey,
                owner: provider.wallet.publicKey,
                }).rpc();
            console.log('UpdatedTx: ', tx);
        
            // console.log('Owner PublicKey: ', provider.wallet.publicKey.toBase58());
            const data = await program.account.slotAccountData.fetch(baseAccount.publicKey);
            console.log('UpdatedSlotData: ', data);

        } catch (err) {
            console.log("Transaction error: ", err);
        }
    }

    return (
        <div className="App">
            <button onClick={initSlotAccount}>InitializeSlots</button>
            <button onClick={updateSlotAccount}>UpdateSlots</button>
            <WalletMultiButton />
        </div>
    );
};
