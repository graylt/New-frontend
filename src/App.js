import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Objects from './components/Objects';
import Ticker from './components/Ticker';
import axios from 'axios';


const App = () => {

  // const [assets, setAssets] = useState([])
  const [tickers, setTickers] = useState([])



  const getArtworks = () => {
    axios.get('https://api.opensea.io/api/v1/assets?format=json').then((res) => {
      console.log(res.data.asset)
      setAssets (res.data.assets)
    })
  }

  const getTicker = () => {
    axios.get('https://api2.binance.com/api/v3/ticker/24hr').then((res) => {
      console.log(res.data)
      setTickers (res.data.assets)
    })
  }

  useEffect(()=>{
    axios.get('https://api.opensea.io/api/v1/assets?format=json').then((res)=>{
      console.log(res.data.assets)
      setAssets(res.data.assets)
      getArtworks()
    })
  },[])

  useEffect(()=>{
    axios.get('https://api2.binance.com/api/v3/ticker/24hr').then((res)=>{
      console.log(res.data)
      setTickers(res.data)
      getTicker()
    })
  },[])

  

  return (
    <>
      <header>
        <h1>Test NFTs</h1>
      </header>
      <div className='container'>
        {assets.map((asset) => {
          return <Objects asset={asset} key={asset.id} />
        })}
      </div>
      <div className='container'>
        {tickers.map((ticker) => {
          return <Ticker ticker={ticker} key={ticker.symbol} />
        })}
      </div>
    </>
  )
}
export default App;
