const Scoin = (props) => {
    return (
        <>
            <p className={props.scoin.symbol}>{props.scoin.priceUsd}</p>
        </>
    )
  }
  export default Scoin