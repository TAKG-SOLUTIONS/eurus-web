import React from 'react';
import "./tradeApi";
import { createChart ,CrosshairMode} from "lightweight-charts";
import "./trade.css";
import {useNavigate} from "react-router-dom";

//const domElement=document.getElementById("tv")
//const chart = LightweightCharts.createChart(domElement,chartProperties);
//const chart = createChart(document.body,chartProperties);

const Trade = () => {
    let navigate=useNavigate();
    function BuyClick(){
        navigate('/wallet')
    }
    function SellClick(){
        navigate('/wallet')
    }
    const log = console.log;
    const chartProperties ={
        width:1450,
        height:600,
        timeScale:{
            timeVisible:true,
            secondsVisible:false,
        },
        layout: {
            backgroundColor: "#000",
            textColor: "rgba(255, 255, 255, 0.9)"
        },
        grid: {
            vertLines: {
                color: "#334158"
            },
            horzLines: {
                color: "#334158"
            }
        },
        crosshair: {
            mode: CrosshairMode.Normal
        },
        priceScale: {
            borderColor: "#485c7b"
        },

    }
    const chart = createChart(document.body,chartProperties);
    const candleSeries = chart.addCandlestickSeries(
        {
            upColor: "#4bffb5",
            downColor: "#ff4976",
            borderDownColor: "#ff4976",
            borderUpColor: "#4bffb5",
            wickDownColor: "#838ca1",
            wickUpColor: "#838ca1"
        }
    );
    fetch(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=10000`)
        .then(res => res.json())
        .then(data => {
            const cdata = data.map(d => {
                return {
                    time: d[0] / 1000,
                    open: parseFloat(d[1]),
                    high: parseFloat(d[2]),
                    low: parseFloat(d[3]),
                    close: parseFloat(d[4])
                }
            });
            candleSeries.setData(cdata);
        })
        .catch(err => log(err));
    return (

        <div>
            <div>
                <h1 className="text-dark">Trade</h1>
                <a onClick={BuyClick} className={'btnBuy'}>Buy</a>
                <a onClick={SellClick} className={'btnSell'}>Sell</a>
            </div>
            <div id ="stock-price">

            </div>
        </div>
    );
};

export default Trade;
