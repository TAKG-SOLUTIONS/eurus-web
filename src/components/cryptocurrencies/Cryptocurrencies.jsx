import React from "react";
import './cryptocurrencies.css'
import {SiBitcoinsv} from "react-icons/si"
import {SiEthereum} from "react-icons/si"
import {GiSunflower} from "react-icons/gi"
import {SiAirbnb} from "react-icons/si"
import {SiLitecoin} from "react-icons/si"
import {SiDogecoin} from "react-icons/si"
import DE from "../../assets/Diagram 1_Transparent_BK (2).gif";
const Cryptocurrencies=()=>{
    return(
        <section id={"cryptocurrencie"}>
            <h5>Get to Trade</h5>
            <h2>Market Trend</h2>
            <table>
                <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Last Price</th>
                    <th>24h Change</th>
                    <th>Markert Cap</th>
                </tr>
                <tr>
                    <td><SiBitcoinsv/></td>
                    <td>Bitcoin</td>
                    <td>$406.7</td>
                    <td className={"gchange"}>+3.09</td>
                    <td>$4523233331</td>
                </tr>
                <tr>
                    <td><SiEthereum/></td>
                    <td>Ethereum</td>
                    <td>$406.7</td>
                    <td className={"gchange"}>+3.09</td>
                    <td>$4523233331</td>
                </tr>
                <tr>
                    <td><GiSunflower/></td>
                    <td>Cardona</td>
                    <td>$406.7</td>
                    <td className={"rchange"}>-3.09</td>
                    <td>$4523233331</td>
                </tr>
                <tr>
                    <td><SiAirbnb/></td>
                    <td>BNB</td>
                    <td>$406.7</td>
                    <td className={"rchange"}>-3.09</td>
                    <td>$4523233331</td>
                </tr>
                <tr>
                    <td><SiLitecoin/></td>
                    <td>Litecoin</td>
                    <td>$406.7</td>
                    <td className={"gchange"}>+3.09</td>
                    <td>4523233331</td>
                </tr>
                <tr>
                    <td><SiDogecoin/></td>
                    <td>Dogecoin</td>
                    <td>$406.7</td>
                    <td className={"gchange"}>+3.09</td>
                    <td>$4523233331</td>
                </tr>
            </table>
        </section>
    )
}
export default Cryptocurrencies