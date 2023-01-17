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

    async function createCounter() {
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
        //     // interact with the program via rpc
        //     await program.rpc.initSlotAccount({
        //         accounts: {
        //             slotAccount: baseAccount.publicKey,
        //             owner: provider.wallet.publicKey,
        //             systemProgram: web3.SystemProgram.programId,
        //         },
        //         signers: [baseAccount]
        //     });
        //     const account = await program.account.myAccount.fetch(baseAccount.publicKey);
        //     console.log('account: ', account);

            const transaction = new web3.Transaction().add(
                web3.SystemProgram.transfer({
                fromPubkey: baseAccount.publicKey,
                toPubkey: provider.wallet.publicKey,
                lamports: web3.LAMPORTS_PER_SOL / 100,
                })
            );
            console.log(await solana.simulateTransaction(transaction, [baseAccount]));

        } catch (err) {
            console.log("Transaction error: ", err);
        }

        // const web3 = require("@solana/web3.js");
        // (async () => {
        // const solana = new web3.Connection("http://127.0.0.1:8899");
        // // Replace with your public/secret keypair, wallet must have funds to pay transaction fees.
        // const fromWallet = web3.Keypair.generate();
        // const toWallet = web3.Keypair.generate();

        // const transaction = new web3.Transaction().add(
        //     web3.SystemProgram.transfer({
        //     fromPubkey: fromWallet.publicKey,
        //     toPubkey: toWallet.publicKey,
        //     lamports: web3.LAMPORTS_PER_SOL / 100,
        //     })
        // );
        // console.log(await solana.simulateTransaction(transaction, [fromWallet]));
        // })();

    }

    return (
        <div className="App">
            <button onClick={createCounter}>Initialize</button>
            <WalletMultiButton />
        </div>
    );
};
