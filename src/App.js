import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
// import Objects from './components/Objects';
import Coin from './components/Coin';
import AddAsset from './components/AddAsset';
import EditNFT from './components/EditNFT';
import axios from 'axios';


const App = () => {

  const [seeAsset, setSeeAsset] = useState(false)

  // api states
  const [assets, setAssets] = useState([])
  const [coins, setCoins] = useState([])


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



  //submit state
  const [seeNFT, setSeeNFT] = useState(false)
  const [editNFT, setEditNFT] = useState({})






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
      // setPrimary_Image()
      setTitle()
      setEditNFT({})
    }
  }



  //nft post
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
    toggleShowAsset()
    setPrimary_Image()
    setTitle()
  }
  
  // const getAssets = () => {
  //   axios.get('http://localhost:3000/assets').then((res) => {
      // console.log(res.data)
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
        setAssets(res.data)
      })
    })
    // setAdditionalImages()
    setEditNFT(assets)
    toggleEditAsset()
    
}


  return (
    <>



      <header>
        <h1>Cautious Ape</h1>

        
     


{/* CRYPTO COUNTER */}

        <div className='coin'>
        {coins.map((coin) => {
          if(coin.symbol === "ETH" || coin.symbol === "SOL") {
            return <Coin coin={coin} key={coin.rank} />
          }
        })}
        </div>
      </header>

{/* ADD NEW NFT */}

      <div className="show-button">
        <button onClick={toggleShowAsset}>
          New NFT
        </button>
        </div>

      <div>
        {seeAsset ? <AddAsset submitAsset={submitAsset} handlePrimary_Image={handlePrimary_Image}/> : ""}
      </div>
          
     
{/* SHOW NFT */}

      <div>
        {assets.map((assets) => {
          return (
            <div key={assets._id}>
                   <img src={assets.primary_Image}/><br/>
        <br/>
        Title:{assets.title}<br/>
        <br/>
        {/* Description:{assets.description}<br/>
        <br/>
        Date created:{assets.createdDate}<br/>
        <br/>
        Additonal images:<img src={assets.additionalImages}/><br/>
        <br/>
        tags:{assets.tags}<br/>
        <br/>
        Artist:{assets.artist}<br/>
        <br/>
        Owner:{assets.owner}<br/>
        <br/>
        Title of collection:{assets.collection_Title}<br/>
        <br/>
        Collection image:{assets.collection_Image}<br/>
        <br/>
        Data url:{assets.data_URL}<br/>
        <br/>
        # of Bids:{assets.bid_count}<br/>
        <br/>
        Bid price:{assets.bid_price}<br/>
        <br/>
        # of sales:{assets.sales_count}<br/>
        <br/>
        Sale price:{assets.sales_price}<br/>
        <br/> */}

{/* DELETE NFT */}

        <button onClick={(event)=>{handleDelete(assets)}}>Remove NFT</button><br/>
          <br/>

{/* EDIT NFT */}

<div>
        <button onClick={toggleEditAsset}>
          Edit
        </button>
      
        
        </div>

      <div>
        {seeNFT ? <EditNFT assets={assets} handleEdit={handleEdit} submitAsset={submitAsset} handleTitle={handleTitle} toggleShowAsset={toggleShowAsset}/> : ""}
        
      </div>

  

    




        </div>
          )
        })}
        </div>
    </>
  )
}

export default App;
