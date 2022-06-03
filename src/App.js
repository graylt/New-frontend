import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
// import Objects from './components/Objects';

import ethereum from './components/ethereum.png'
import solana from './components/solana.png'
import Ecoin from './components/Ecoin';
import Scoin from './components/Scoin';

// import Coin from './components/Coin';
import AddAsset from './components/AddAsset';
import EditNFT from './components/EditNFT';
import axios from 'axios';


const App = () => {

  // api states
  const [assets, setAssets] = useState([])
  // const [coins, setCoins] = useState([])
  const [ecoins, setECoins] = useState([]) 
  const [scoins, setSCoins] = useState([]) 

  // calculator states
  const [erates, setERates] = useState(1)
  const [srates, setSRates] = useState(1)
  const [dollars, setDollars] = useState(0)
  const [eths, setEths] = useState(0)
  const [sols, setSols] = useState(0)
  const [currency, setCurrency] = useState('ETH')

  // set calculator currency
  const bidETH = (event) => {
    setCurrency('ETH')
  }
  
  const bidSOL = (event) => {
    setCurrency('SOL')
  }


  // calculator states handle
  const handleDollars = (event) => {
    setDollars(event.target.value)
  }

  const handleERate = (event) => {
    setERates(event.target.value)
  }

  const handleSRate = (event) => {
    setSRates(event.target.value)
  }

  // calculate bids
  const calcEths = (event) => {
    setEths(dollars / erates )
  } 

  const calcSols = (event) => {
    setSols(dollars / srates )
  } 

  // form states
  const [bought, setBought] = useState(false)
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

  //submit state
  const [seeNFT, setSeeNFT] = useState(false)

  //update toggle state
  const [seeAsset, setSeeAsset] = useState(false)

   //edit state
  const [editNFT, setEditNFT] = useState({})
  const [editView, setEditView] = useState(true)


  // handle for select form
 const [bids, setBids] = useState() 
 
 const handleChange = (event) => {
  // setBids(event.target.value)
}

  // form states handle
  const handleBought = (event) => {
    setBought(event.target.checked)
  }

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

  const toggleShowAsset = () => {
    if (seeAsset === false) {
      setSeeAsset(true)
    } else {
      setSeeAsset(false)
    }
  }

  const toggleEditAsset = () => {
    if (seeNFT === false) {
      setSeeNFT(true)
    } else {
      setSeeNFT(false)
      setEditView(!editView)
      setEditNFT({})
      setPrimary_Image()
      // setBought()
      setTitle()
      setDescription()
      // setCreatedDate()
      // setAdditionalImages()
      setTags()
      setArtist()
      // setOwner()
      // setCollection_Title()
      // setCollection_Image()
      setData_URL()
      setBid_Count()
      setBid_Price()
      setSales_Count()
      setSales_Price()
    }
  }

  //nft post
  const submitAsset = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/assets', {
    // axios.post('https://still-stream-84605.herokuapp.com/assets', {
      bought: bought,
      primary_Image: primary_Image,
      title: title,
      description: description,
      // createdDate: createdDate,
      // additionalImages: additionalImages,
      tags: tags,
  
      // artist or owner info
      artist: artist,
      owner: owner,
      
      // collection info 
      // collection_Title: collection_Title,
      // collection_Image: collection_Image,
  
      // contract info
      data_URL: data_URL,
      bid_count: bid_count,
      bid_price: bid_price, 
  
      // prior sales info 
      sales_count: sales_count, 
      sales_price: sales_price
    }).then(()=>{
      axios.get('http://localhost:3000/assets').then((res)=>{
      // axios.get('https://still-stream-84605.herokuapp.com/assets').then((res)=>{
        setAssets(res.data)
        // console.log(res.data)
      })
    })
    toggleShowAsset()
    setBought()
    setPrimary_Image()
    setTitle()
    setDescription()
    // setCreatedDate()
    // setAdditionalImages()
    setTags()
    setArtist()
    // setOwner()
    // setCollection_Title()
    // setCollection_Image()
    setData_URL()
    setBid_Count()
    setBid_Price()
    setSales_Count()
    setSales_Price()
  }

  // get request with axios - ethereum/crypto api 
  const getCoins = () => {
    axios.get('https://api.coincap.io/v2/assets').then((res) => {
      // console.log(res.data.data)
      // setCoins (res.data.data)
      setECoins (res.data.data)
      setSCoins (res.data.data)
    })
  }

   // setting up useEffect/invoking get request with axios - ethereum/crypto api 
  useEffect(()=>{
    getCoins()
    axios.get('http://localhost:3000/assets').then((res)=>{
    // axios.get('https://still-stream-84605.herokuapp.com/assets').then((res)=>{
      setAssets(res.data)
      
    })
  },[])

  //nft delete
  const handleDelete = (assetsData)=>{
    axios
        .delete(`http://localhost:3000/assets/${assetsData._id}`)
        // .delete(`https://still-stream-84605.herokuapp.com/assets/${assetsData._id}`)
        .then(()=>{
            axios
                 .get('http://localhost:3000/assets')
                //  .get('https://still-stream-84605.herokuapp.com/assets')
                .then((res)=>{
                    setAssets(res.data)
                })
        })
  }

  //nft edit
  const handleEdit = (event, assetsData) => {
    event.preventDefault()
    axios.put(`http://localhost:3000/assets/${assetsData._id}`, {
    // axios.put(`https://still-stream-84605.herokuapp.com/assets/${assetsData._id}`, {
      bought: bought,
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
      //  axios.get('https://still-stream-84605.herokuapp.com/assets').then((res)=>{
        setAssets(res.data)
      })
    })
    // setAdditionalImages()
    setEditNFT(assets)
    toggleEditAsset()
    setPrimary_Image()
    setBought()
    setTitle()
    setDescription()
    setCreatedDate()
    // setAdditionalImages()
    setTags()
    setArtist()
    // setOwner()
    // setCollection_Title()
    // setCollection_Image()
    setData_URL()
    setBid_Count()
    setBid_Price()
    setSales_Count()
    setSales_Price()
}

  return (
    <>
    <main className="wrapper">
      <header>
        <div className="navTop">
        <h1>Cautious Ape</h1>

        <div className='ecoin'>
        <img src= {ethereum} />
        {ecoins.map((ecoin) => {
          if(ecoin.symbol === "ETH") {
            return <Ecoin ecoin={ecoin} key={ecoin.rank} />
          } 
        })}
        </div>

        <div className='scoin'>
        <img src= {solana} />
        {scoins.map((scoin) => {
          if(scoin.symbol === "SOL") {
            return <Scoin scoin={scoin} key={scoin.rank} />
          } 
        })}
        </div>

        </div>
        {
        (currency === 'ETH')?
            <div className="navLeft">
              <h3>Crypto Calculator</h3>
              <button onClick={bidETH}>ETH Calculator</button>
              <button onClick={bidSOL}>SOL Calculator</button><br></br>

              <p>ETH: {eths} </p>

              <form>
                Amount (USD) <input type="number" onChange={handleDollars} /><br />
                Rate (ETH) <input type="number" step="0.0000000000000001" onChange={handleERate} /><br />
              </form>
              <button onClick={calcEths}>Convert to ETH</button><br></br>
            </div>
          :
            <div className="navLeft">
              <h3>Crypto Calculator</h3>
              <button onClick={bidETH}>ETH Calculator</button>
              <button onClick={bidSOL}>SOL Calculator</button><br></br>

              <p>SOL: {sols} </p>

              <form>
                Amount (USD) <input type="number" onChange={handleDollars} /><br />
                Rate (SOL) <input type="number" step="0.0000000000000001" onChange={handleSRate} /><br />
              </form>
              <button onClick={calcSols}>Convert to SOL</button><br></br>
            </div>
        }
      </header>

      

{/* SHOW NFT */}
        <div className="subheader-container">
        <h2>NFT Watchlist</h2>

        {/* ADD NEW NFT */}

      <div className="new-button">
        <button onClick={toggleShowAsset}>
          Add NFT
        </button>
        </div>
      <div>
        {seeAsset ? <AddAsset 
        submitAsset={submitAsset} 
        handleBought={handleBought} 
        handlePrimary_Image={handlePrimary_Image} 
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        // handleCreatedDate={handleCreatedDate} 
        // handleAdditionalImages={handleAdditionalImages} 
        handleTags={handleTags} 
        handleArtist={handleArtist} 
        // handleOwner={handleOwner} 
        // handleCollection_Title={handleCollection_Title} 
        // handleCollection_Image={handleCollection_Image} 
        handleData_URL={handleData_URL} 
        handleBid_Count={handleBid_Count} 
        handleBid_Price={handleBid_Price} 
        handleSales_Count={handleSales_Count} 
        handleSales_Price={handleSales_Price}
        /> : ""}
      </div>

        </div>
        
      <div className="show-container">
        {assets.map((assets) => {
          return (
            <div key={assets._id}>
                   <img src={assets.primary_Image}/><br/>
        <br/>
        <h3>Bought:{assets.bought}</h3><br/>

{/* DETAILS SELECT FORM */}

        <form>
        <select value={assets} onChange={handleChange}>
        <option defaultValue="Details">
             Details
           </option>
           <option value={assets.value}>
             Title: {assets.title}
           </option>
           <option value={assets.value}>
             Artist: {assets.artist}
           </option>
           <option value={assets.value}>
             Description: {assets.description}
           </option>
           {/* <option value={assets.value}>
             Date created: {assets.createdDate}
           </option> */}
           {/* <option value={assets.value}>
             Description: {assets.createdDate}
           </option>
           <option value={assets.value}>
             Additional images: {assets.additionalImages}
           </option>
           <option value={assets.value}>
             Owner: {assets.owner}
           </option>
           <option value={assets.value}>
             Collection title: {assets.collection_Title}
           </option>
           <option value={assets.value}>
             Collection image: {assets.collection_Image}
           </option> */}
           <option value={assets.value}>
             Tags: {assets.tags}
           </option>
        </select>
        </form>

{/* BEFORE SELECT FORM */}

              {/* Title:{assets.title}<br/>
        <br/> */}
        {/* Artist:{assets.artist}<br/>
        <br/> */}
         {/* Description:{assets.description}<br/>
        <br/> */}
        {/* Date created:{assets.createdDate}<br/>
        <br/> */}
        {/* Additonal images:<img src={assets.additionalImages}/><br/>
        <br/> */}
        {/* Owner:{assets.owner}<br/>
        <br/> */}
        {/* Title of collection:{assets.collection_Title}<br/>
        <br/>
        Collection image:{assets.collection_Image}<br/>
        <br/> */}
        {/* tags:{assets.tags}<br/>
        <br/> */}
         {/* <br/>
        # of sales:{assets.sales_count}<br/>
        <br/>
        Sale price:{assets.sales_price}<br/>
        <br/> */}
    
{/* BID SELECT FORM */}

        <a href={assets.data_URL}>
          Buy
        </a>
        <br/>
        <form>
          <select value={assets} onChange={handleChange}>
           <option defaultValue="Bids">
             Bids
           </option>
           <option value={assets.value}>
             Bids: {assets.bid_count}
           </option>
           <option value={assets.value}>
             Bid price: {assets.bid_price}
           </option>
          </select>
        </form>
        <br/>
        
{/* SALE SELECT FORM */}

        <a href={assets.data_URL}>
          Sell
        </a>
        <br/>
        <form>
          <select value={assets} onChange={handleChange}>
          <option defaultValue="Sales">
             Sales
           </option>
           <option value={assets.value}>
             Sales: {assets.sales_count}
           </option>
           <option value={assets.value}>
             Sale price: {assets.sales_price}
           </option>
          </select>
        </form>
        <br/>

{/* DELETE NFT */}

        <button onClick={(event)=>{handleDelete(assets)}}>
          Remove NFT
        </button>
        <br/>
          <br/>

{/* EDIT NFT */}

      <div> 
     <button onClick={() => toggleEditAsset(!editView)}>
     {/* <p id="edit-button" onClick={toggleEditAsset}> </p>*/}
       {editView ? 'Edit' : 'Cancel' }
     </button>  
        </div>
      <div>
        {seeNFT ? <EditNFT 
        assets={assets} 
        handleEdit={handleEdit} 
        submitAsset={submitAsset}  
        toggleShowAsset={toggleShowAsset}
        // handlePrimary_Image={handlePrimary_Image} 
        handleTitle={handleTitle} 
        handleBought={handleBought} 
        handleDescription={handleDescription} 
        // handleCreatedDate={handleCreatedDate} 
        // handleAdditionalImages={handleAdditionalImages} 
        handleTags={handleTags} 
        handleArtist={handleArtist} 
        // handleOwner={handleOwner} 
        // handleCollection_Title={handleCollection_Title} 
        // handleCollection_Image={handleCollection_Image} 
        handleData_URL={handleData_URL} 
        handleBid_Count={handleBid_Count} 
        handleBid_Price={handleBid_Price} 
        handleSales_Count={handleSales_Count} 
        handleSales_Price={handleSales_Price}
        /> : ""}
      </div>
        </div>
          )
        })}
        </div>
        </main>
    </>
  )
}

export default App;
