import TradeViewChart from 'react-crypto-chart';
import React from 'react';

const CoinTrade = () => {
    return (
        <div>
            <TradeViewChart pair="BTCBUSD" />;
        </div>
    );
};

export default CoinTrade;