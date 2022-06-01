const Coin = (props) => {
  return (
      <>
          <p>{props.coin.symbol} {props.coin.priceUsd}</p>
      </>
  )
}
export default Coin