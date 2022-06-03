const Coin = (props) => {
  return (
      <>
          {/* <img src={props.character.image}/> */}
          <p className={props.coin.symbol}>{props.coin.symbol} {props.coin.priceUsd}</p>
      </>
  )
}
export default Coin