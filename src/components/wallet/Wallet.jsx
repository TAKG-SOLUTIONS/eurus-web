import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';
import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,

} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback, useState } from 'react';

require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');
let thelamports = 0;
let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9"
function getWallet(){


}
const Wallet: FC = () => {


    return (
        <Context>
            <Content />
        </Context>
    );
};


export default Wallet;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new LedgerWalletAdapter(),
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolletExtensionWalletAdapter(),
            new SolletWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
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
    let [lamports, setLamports] = useState(0);
    let [wallet, setWallet] = useState("9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9");




    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback( async () => {

        if (!publicKey) throw new WalletNotConnectedError();
        connection.getBalance(publicKey).then((bal) => {
            console.log(bal/LAMPORTS_PER_SOL);

        });

        console.log(publicKey.toBase58());
        console.log("lamports sending: {}", thelamports)
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(theWallet),
                lamports: thelamports,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

    function setTheLamports(e: any)
    {
        console.log(Number(e.target.value));
        setLamports(Number(e.target.value));
        lamports = e.target.value;
        thelamports = lamports;
    }
    function setTheWallet(e: any){
        setWallet(e.target.value)
        theWallet = e.target.value;
    }
    return (


        <div className="App">
            <div className="navbar">
                <div className="navbar-inner ">
                    <a id="title" className="brand" href="#">Brand</a>
                    <ul className="nav">
                        <li className="active "><a className='adjustWallet' href="#">Courses</a></li>
                        <li><a href="#">Previous</a></li>
                        <li><a href="https://serpent.academy/beta/course/intro-to-solana-development/functions/">Next</a></li>


                    </ul>
                    <ul className="nav pull-right">
                        <li><a href="#">White Paper</a></li>
                        <li className="divider-vertical"></li>
                        <li><WalletMultiButton /></li>

                    </ul>
                </div>
            </div>
            <input placeholder='wallet to send' type='text' onChange={e => setTheWallet(e)} />

            <input placeholder='lamports' type='number' onChange={e => setTheLamports(e)} />

            <br></br>
            <button className='btn' onClick={onClick}>Send Lamports</button>


        </div>
    );
};