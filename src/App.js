import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
// import Objects from './components/Objects';
import Ticker from './components/Ticker';
import axios from 'axios';


const App = () => {

  // api states
  // const [assets, setAssets] = useState([])
  const [tickers, setTickers] = useState([])

  // form states
  const [primary_Image, setPrimary_Image] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [createdDate, setCreatedDate] = useState()
  const [additionalImages, setAdditionalImages] = useState()
  const [tags, setTags] = useState()

  // artist or owner info
  const [artist, setArtist] = useState()
  const [owner, setOwner] = useState()

   // collection info 
  const [collection_Title, setCollection_Title] = useState()
  const [collection_Image, setCollection_Image] = useState()

  // contract info
  const [data_URL, setData_URL] = useState()
  const [bid_count, setBid_Count] = useState()
  const [bid_price, setBid_Price] = useState()

  // prior sales info 
  const [sales_count, setSales_Count] = useState()
  const [sales_price, setSales_Price] = useState()

  // submit state
  const [NFT, setNFT] = useState()


  // form states handle
  const handlePrimary_Image = (event) => {
    setPrimary_Image(event.target.value)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleCreatedDate = (event) => {
    setCreatedDate(event.target.value)
  }

  const handleAdditionalImages = (event) => {
    setAdditionalImages(event.target.value)
  }

  const handleTags = (event) => {
    setTags(event.target.value)
  }

   // artist or owner info
  const handleArtist = (event) => {
    setArtist(event.target.value)
  }

  const handleOwner = (event) => {
    setOwner(event.target.value)
  }

   // collection info
  const handleCollection_Title = (event) => {
    setCollection_Title(event.target.value)
  }

  const handleCollection_Image = (event) => {
    setCollection_Image(event.target.value)
  }

  // contract info
  const handleData_URL = (event) => {
    setData_URL(event.target.value)
  }

  const handleBid_Count = (event) => {
    setBid_Count(event.target.value)
  }

  const handleBid_Price = (event) => {
    setBid_Price(event.target.value)
  }

   // prior sales info 
  const handleSales_Count = (event) => {
    setSales_Count(event.target.value)
  }

  const handleSales_Price = (event) => {
    setSales_Price(event.target.value)
  }

  // nft post
  const submitNFT = (event) => {
    event.preventDefault()
    // axios.post('http://localhost:3000/houses', {
      primary_Image: primary_Image 
      title: title
      description: description
      createdDate: createdDate
      additionalImages: additionalImages
      tags: tags
  
      // artist or owner info
      artist: artist
      owner: owner
      
      // collection info 
      collection_Title: collection_Title
      collection_Image: collection_Image
  
      // contract info
      data_URL: data_URL
      bid_count: bid_count
      bid_price: bid_price 
  
      // prior sales info 
      sales_count: sales_count 
      sales_price: sales_price
  })
    }).then(()=>{
      // axios.get('http://localhost:3000/houses').then((response)=>{
        setNFT(res.data)
        console.log(res.data)
      })
    })
  }
  

 


  // const getArtworks = () => {
  //   axios.get('https://api.opensea.io/api/v1/assets?format=json').then((res) => {
  //     console.log(res.data.asset)
  //     setAssets (res.data.assets)
  //   })
  // }

  // get request with axios - ethereum/crypto api 
  const getTicker = () => {
    axios.get('https://api2.binance.com/api/v3/ticker/24hr').then((res) => {
      console.log(res.data)
      setTickers (res.data)
    })
  }

  // useEffect(()=>{
  //   axios.get('https://api.opensea.io/api/v1/assets?format=json').then((res)=>{
  //     console.log(res.data.assets)
  //     setAssets(res.data.assets)
  //     getArtworks()
  //   })
  // },[])

   // setting up useEffect/invoking get request with axios - ethereum/crypto api 
  useEffect(()=>{
    // axios.get('https://api2.binance.com/api/v3/ticker/24hr').then((res)=>{
    //   console.log(res.data)
      // setTickers(res.data)
      getTicker()
      setNFT(res.data)
    // })
  },[])

  // nft delete
  const handleDelete = (NFTData)=>{
    axios
        // .delete(`http://localhost:3000/houses/${houseData._id}`)
        .then(()=>{
            axios
                // .get('http://localhost:3000/houses')
                .then((response)=>{
                    setNFT(res.data)
                })
        })
  }

  // nft edit
  const handleEdit = (event, NFTData) => {
    event.preventDefault()
    // axios.put(`http://localhost:3000/houses/${houseData._id}`, {
      primary_Image: primary_Image 
      title: title
      description: description
      createdDate: createdDate
      additionalImages: additionalImages
      tags: tags
  
      // artist or owner info
      artist: artist
      owner: owner
      
      // collection info 
      collection_Title: collection_Title
      collection_Image: collection_Image
  
      // contract info
      data_URL: data_URL
      bid_count: bid_count
      bid_price: bid_price 
  
      // prior sales info 
      sales_count: sales_count 
      sales_price: sales_price
    }).then(()=>{
      // axios.get('http://localhost:3000/houses').then((response)=>{
        setNFT(res.data)
      })
    })
}

  

  return (
    <>
      <header>
        <h1>Cautious Ape</h1>
      </header>
      <div className="submit-form-container">
        <form onSubmit={submitNFT}>
        <h3>Submit a new NFT</h3>
          Image: <input type="text" onChange={handlePrimary_Image}/><br/>
          <br/>
          Title:  <input type="text" onChange={handleTitle}/><br/>
          <br/>
          Description: <input type="text" onChange={handleDescription}/><br/>
          <br/>
          Date created: <input type="checkbox" onChange={handleCreatedDate}/><br/>
          <br/>
          Additonal images: <input type="text" onChange ={handleAdditionalImages}/><br/>
          <br/>
          tags:  <input type="text" onChange ={handleTags}/><br/>
          <br/>
          Artist:  <input type="text" onChange ={handleArtist}/><br/>
          <br/>
          Owner:  <input type="text" onChange ={handleOwner}/><br/>
          <br/>
          Title of collection:  <input type="text" onChange ={handleCollection_Title}/><br/>
          <br/>
          Collection image:  <input type="text" onChange ={handleCollection_Image}/><br/>
          <br/>
          Date url:  <input type="text" onChange ={handleData_URL}/><br/>
          <br/>
          # of Bids:  <input type="number" onChange ={handleBid_Count}/><br/>
          <br/>
          Bid price:  <input type="number" onChange ={handleBid_Price}/><br/>
          <br/>
          # of sales:  <input type="number" onChange ={handleSales_Count}/><br/>
          <br/>
          Sale price:  <input type="number" onChange ={handleSales_Price}/><br/>
          <br/>
          <input type="submit" value="Add NFT"/>
        </form>
      </div>

{/* display nft collection */}

      <div className="flex-parent-container">
      {/* {NFT.map((NFT)=>{ */}
          return <div className="item">
            <img src={NFT.Primary_Image}/><br/>
            <br/>
            Title:{NFT.handlePrice}<br/>
          <br/>
          Description:{NFT.handleDescription}<br/>
          <br/>
          Date created:{NFT.handleCreatedDate}/><br/>
          <br/>
          Additonal images:<img src={NFT.handleAdditionalImages}/><br/>
          <br/>
          tags:{NFT.handleTags}<br/>
          <br/>
          Artist:{NFT.handleArtist}<br/>
          <br/>
          Owner:{NFT.handleOwner}<br/>
          <br/>
          Title of collection:{NFT.handleCollection_Title}<br/>
          <br/>
          Collection image:{NFT.handleCollection_Image}<br/>
          <br/>
          Date url:{NFT.handleData_URL}<br/>
          <br/>
          # of Bids:{NFT.handleBid_Count}<br/>
          <br/>
          Bid price:{NFT.handleBid_Price}<br/>
          <br/>
          # of sales:{NFT.handleSales_Count}<br/>
          <br/>
          Sale price:{NFT.handleSales_Price}<br/>
          <br/>

{/* delete nft collection */}

          <button onClick={ (event)=>{ handleDelete(NFT) } }>Remove listing</button><br/>
            <br/>

{/* edit nft collection */}

          <form onSubmit={(event)=>{handleEdit(event, NFT)
            }}>
           Image: <input type="text" onChange={handlePrimary_Image}/><br/>
          <br/>
          Title:  <input type="text" onChange={handleTitle}/><br/>
          <br/>
          Description: <input type="text" onChange={handleDescription}/><br/>
          <br/>
          Date created: <input type="checkbox" onChange={handleCreatedDate}/><br/>
          <br/>
          Additonal images: <input type="text" onChange ={handleAdditionalImages}/><br/>
          <br/>
          tags:  <input type="text" onChange ={handleTags}/><br/>
          <br/>
          Artist:  <input type="text" onChange ={handleArtist}/><br/>
          <br/>
          Owner:  <input type="text" onChange ={handleOwner}/><br/>
          <br/>
          Title of collection:  <input type="text" onChange ={handleCollection_Title}/><br/>
          <br/>
          Collection image:  <input type="text" onChange ={handleCollection_Image}/><br/>
          <br/>
          Date url:  <input type="text" onChange ={handleData_URL}/><br/>
          <br/>
          # of Bids:  <input type="number" onChange ={handleBid_Count}/><br/>
          <br/>
          Bid price:  <input type="number" onChange ={handleBid_Price}/><br/>
          <br/>
          # of sales:  <input type="number" onChange ={handleSales_Count}/><br/>
          <br/>
          Sale price:  <input type="number" onChange ={handleSales_Price}/><br/>
          <br/>
          <input type="submit" value="Add NFT"/>
        </form>
        </div>
    
         

      {/* <div className='container'>
        {assets.map((asset) => {
          return <Objects asset={asset} key={asset.id} />
        })}
      </div> */}
      <div className='container'>
        
        {tickers.map((ticker) => {
          if (ticker.symbol === "ETHBTC")
          return <Ticker ticker={ticker} key={ticker.firstID} />
        })}
      </div>
    </>
  )
}

export default App;
