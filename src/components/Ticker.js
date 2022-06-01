const Ticker = (props) => {

    return (
    <div>
        <h2>{props.ticker.symbol}</h2>
        <h2>{props.ticker.priceChange}</h2>
        <h2>{props.ticker.priceChangePercent}</h2>
        <h2>{props.ticker.prevClosePrice}</h2>
        <h2>{props.ticker.lastPrice}</h2>
        <h2>{props.ticker.lastQty}</h2>
  </div>
);
}

export default Ticker