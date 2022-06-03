
const newAsset = (props) => {
    return (
        <div className="asset-container">
          <h3>Submit a new NFT</h3>
        <form onSubmit={props.submitAsset}>
          Bought:  <input type="checkbox" onChange={props.handleBought}/><br/>
          <br/>
          Image: <input type="url" onChange={props.handlePrimary_Image}/><br/>
          <br/>
          Title:  <input type="text" onChange={props.handleTitle}/><br/>
          <br/>
          Description: <input type="text" onChange={props.handleDescription}/><br/>
          <br/>
          {/* Date created: <input type="text" onChange={props.handleCreatedDate}/><br/>
          <br/> */}
          {/* Additonal images: <input type="text" onChange ={props.handleAdditionalImages}/><br/>
          <br/> */}
          tags:  <input type="text" onChange ={props.handleTags}/><br/>
          <br/>
          Artist:  <input type="text" onChange ={props.handleArtist}/><br/>
          <br/>
          {/* Owner:  <input type="text" onChange ={props.handleOwner}/><br/>
          <br/> */}
          {/* Title of collection:  <input type="text" onChange ={props.handleCollection_Title}/><br/>
          <br/> */}
          {/* Collection image:  <input type="text" onChange ={props.handleCollection_Image}/><br/>
          <br/> */}
          Data url:  <input type="text" onChange ={props.handleData_URL}/><br/>
          <br/>
          # of Bids:  <input type="number" onChange ={props.handleBid_Count}/><br/>
          <br/>
          Bid price:  <input type="text" onChange ={props.handleBid_Price}/><br/>
          <br/>
          # of sales:  <input type="number" onChange ={props.handleSales_Count}/><br/>
          <br/>
          Sale price:  <input type="text" onChange ={props.handleSales_Price}/><br/>
          <br/>
          <input type="submit" value="Add NFT"/>
        </form>
      </div>
    )
}

export default newAsset

