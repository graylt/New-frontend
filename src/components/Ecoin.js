const Ecoin = (props) => {
    return (
        <>
            <p className={props.ecoin.symbol}>{props.ecoin.priceUsd}</p>
        </>
    )
  }
  export default Ecoin