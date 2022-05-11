import React from 'react';
import "./MetaMaskConnect"
import ConnectButton from "./MetaMaskConnect";
import MetaMaskLogo from "./MetaMaskLogo";
import wallet from "../../assets/animation_500_l2zzkbxh.gif"
import "./wallet.css"
import CryptoPaymentsForm from "./CryptoPaymentsForm";
const Wallet = () => {
    return (
        <div>
            <div className={"box"}>
                <h1 className={"wh1"}>My Wallet</h1>
            </div>
            <div className={"wallet-image"}>
                <img src={wallet}  alt={"wallet"}/>
            </div>
            <div className={"mwallet"}>
                <ConnectButton/>
            </div>
            <div className={"mbox"}>
                <MetaMaskLogo/>
            </div>
            <div className={""}>

            </div>
        </div>
    );
};

export default Wallet;