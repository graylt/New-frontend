import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
// import Objects from './components/Objects';
import Coin from './components/Coin';
import axios from 'axios';


const App = () => {

  // api states
  const [assets, setAssets] = useState([])
  const [coins, setCoins] = useState([])

  // const[seeAddAsset, setSeeAddAsset] = useState(false)

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
  // const [NFT, setNFT] = useState()


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
  const submitAsset = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/assets', {
      primary_Image: primary_Image,
      title: title,
      description: description,
      createdDate: createdDate,
      additionalImages: additionalImages,
      tags: tags,
  
      // artist or owner info
      artist: artist,
      owner: owner,
      
      // collection info 
      collection_Title: collection_Title,
      collection_Image: collection_Image,
  
      // contract info
      data_URL: data_URL,
      bid_count: bid_count,
      bid_price: bid_price, 
  
      // prior sales info 
      sales_count: sales_count, 
      sales_price: sales_price
    }).then(()=>{
      axios.get('http://localhost:3000/assets').then((res)=>{
        setAssets(res.data)
        // console.log(res.data)
      })
    })
  }
  
  // const getAssets = () => {
  //   axios.get('http://localhost:3000/assets').then((res) => {
  //     console.log(res.data)
  //     setAssets (res.data)
  //   })
  // }

  // get request with axios - ethereum/crypto api 
  const getCoins = () => {
    axios.get('https://api.coincap.io/v2/assets').then((res) => {
      // console.log(res.data.data)
      setCoins (res.data.data)
    })
  }

   // setting up useEffect/invoking get request with axios - ethereum/crypto api 
  useEffect(()=>{
    getCoins()
    axios.get('http://localhost:3000/assets').then((res)=>{
      setAssets(res.data)
      // getAssets()
    })
  },[])

  //nft delete
  const handleDelete = (assetsData)=>{
    axios
        .delete(`http://localhost:3000/assets/${assetsData._id}`)
        .then(()=>{
            axios
                 .get('http://localhost:3000/assets')
                .then((res)=>{
                    setAssets(res.data)
                })
        })
  }

  //nft edit
  const handleEdit = (event, assetsData) => {
    event.preventDefault()
    axios.put(`http://localhost:3000/assets/${assetsData._id}`, {
      primary_Image: primary_Image,
      title: title,
      description: description,
      createdDate: createdDate,
      additionalImages: additionalImages,
      tags: tags,
  
      // artist or owner info
      artist: artist,
      owner: owner,
      
      // collection info 
      collection_Title: collection_Title,
      collection_Image: collection_Image,
  
      // contract info
      data_URL: data_URL,
      bid_count: bid_count,
      bid_price: bid_price, 
  
      // prior sales info 
      sales_count: sales_count, 
      sales_price: sales_price,
    }).then(()=>{
       axios.get('http://localhost:3000/assets').then((res)=>{
        {setAssets(res.data)}
      })
    })
}


  return (
    <>

      <header>
        <h1>Cautious Ape</h1>

        <div className='coin'>
        {coins.map((coin) => {
          if(coin.symbol === "ETH" || coin.symbol === "SOL") {
            return <Coin coin={coin} key={coin.rank} />
          }
        })}
        </div>

      </header>

      <div className="submit-form-container">
        <form onSubmit={submitAsset}>
        <h3>Submit a new NFT</h3>
          Image: <input type="text" onChange={handlePrimary_Image}/><br/>
          <br/>
          Title:  <input type="text" onChange={handleTitle}/><br/>
          <br/>
          Description: <input type="text" onChange={handleDescription}/><br/>
          <br/>
          Date created: <input type="text" onChange={handleCreatedDate}/><br/>
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



      <div className="flex-parent-container">
        <h3>NFTs</h3>
        {assets.map((assets) => {
          return <div className="item">
            <img src={assets.primary_Image} /><br />
            <br />
            Title:{assets.handlePrice}<br />
            <br />
            Description:{assets.handleDescription}<br />
            <br />
            Date created:{assets.handleCreatedDate}<br />
            <br />
            Additonal images:<img src={assets.handleAdditionalImages} /><br />
            <br />
            tags:{assets.handleTags}<br />
            <br />
            Artist:{assets.handleArtist}<br />
            <br />
            Owner:{assets.handleOwner}<br />
            <br />
            Title of collection:{assets.handleCollection_Title}<br />
            <br />
            Collection image:{assets.handleCollection_Image}<br />
            <br />
            Date url:{assets.handleData_URL}<br />
            <br />
            # of Bids:{assets.handleBid_Count}<br />
            <br />
            Bid price:{assets.handleBid_Price}<br />
            <br />
            # of sales:{assets.handleSales_Count}<br />
            <br />
            Sale price:{assets.handleSales_Price}<br />
            <br />


            <button onClick={(event) => { handleDelete(assets) }}>Remove NFT</button><br />
            <br />


            <form onSubmit={(event) => { handleEdit(event, assets) }}>
              Image: <input type="text" onChange={handlePrimary_Image} /><br />
              <br />
              Title:  <input type="text" onChange={handleTitle} /><br />
              <br />
              Description: <input type="text" onChange={handleDescription} /><br />
              <br />
              Date created: <input type="text" onChange={handleCreatedDate} /><br />
              <br />
              Additonal images: <input type="text" onChange={handleAdditionalImages} /><br />
              <br />
              tags:  <input type="text" onChange={handleTags} /><br />
              <br />
              Artist:  <input type="text" onChange={handleArtist} /><br />
              <br />
              Owner:  <input type="text" onChange={handleOwner} /><br />
              <br />
              Title of collection:  <input type="text" onChange={handleCollection_Title} /><br />
              <br />
              Collection image:  <input type="text" onChange={handleCollection_Image} /><br />
              <br />
              Date url:  <input type="text" onChange={handleData_URL} /><br />
              <br />
              # of Bids:  <input type="number" onChange={handleBid_Count} /><br />
              <br />
              Bid price:  <input type="number" onChange={handleBid_Price} /><br />
              <br />
              # of sales:  <input type="number" onChange={handleSales_Count} /><br />
              <br />
              Sale price:  <input type="number" onChange={handleSales_Price} /><br />
              <br />
              <input type="submit" value="Edit NFT" />
            </form>
          </div>
        })}
      </div>
    </>
  )
}

export default App;
