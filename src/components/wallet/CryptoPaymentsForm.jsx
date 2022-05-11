{/*import React,{useState} from 'react';
import {ethers} from "ethers";

declare global {
    interface Window {
        ethereum:any;
    }
}
function CryptoPaymentsForm (){
    const [amount, setAmount] = useState(0);
    const [destinationAddress, setDestinationAddress] = useState("");
    const  startPayment = async (event: any) => {
        console.log({amount, destinationAddress});
        event.preventDefault();

        try {

            if (!window.ethereum) {
                throw  new  Error("No crypto wallet found. Please install it.");
            }

            await  window.ethereum.send("eth_requestAccounts");

            const  provider = new  ethers.providers.Web3Provider(window.ethereum);

            const  signer = provider.getSigner();

            ethers.utils.getAddress(destinationAddress);

            const  transactionResponse = await  signer.sendTransaction({

                to:  destinationAddress,

                value:  ethers.utils.parseEther(amount.toString())

            });

            console.log({transactionResponse});

        } catch (error: any) {

            console.log({error});

        }
    }
    return (
        <div className="p-5 card shadow text-center">
            <input  type="number"  placeholder="Amount" value={amount}  className="col-12 form-control mb-3"  onChange={event  => {setAmount(Number.parseFloat(event.target.value))}}  />
            <input  placeholder="Destination address" value={destinationAddress}  className="col-12 form-control mb-3"  onChange={event  => {setDestinationAddress(event.target.value)}}  />
            <button  className="col-12 btn btn-primary"  onClick={startPayment}>
                Send Payment
            </button>
        </div>
    );
};

export default CryptoPaymentsForm;*/}