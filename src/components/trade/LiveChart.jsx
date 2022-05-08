import { createChart } from 'lightweight-charts';
const chartProperties ={
    width:1450,
    height:600,
    timeScale:{
        timeVisible:true,
        secondsVisible:false,
    }
}
const domElement=document.getElementById("itv");
//const chart = LightweightCharts.createChart(domElement,chartProperties);
const chart = createChart(document., chartProperties);
const candleSeries= chart.addCandlestickSeries();

fetch(`https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1d&limit=1000`)
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
