const EditNFT = (props) => {
    return (
      <div>
        <form onSubmit={(event)=>{props.handleEdit(event, props.assets)}}>
        Bought:  <input type="checkbox" onChange={props.handleBought} placeholder={props.assets.bought}/><br/>
          <br/>
         {/* Image: <input type="text" onChange={props.handlePrimary_Image} placeholder={props.assets.primary_Image}/><br/>
        <br/>  */}
        Title:  <input type="text" onChange={props.handleTitle} placeholder={props.assets.title}/><br/>
        <br/>
         Description: <input type="text" onChange={props.handleDescription} placeholder={props.assets.description}/><br/>
        <br/>
        {/* Date created: <input type="text" onChange={props.handleCreatedDate}/><br/>
        <br/> */}
        {/* Additonal images: <input type="text" onChange ={props.handleAdditionalImages}/><br/>
        <br/> */}
        Tags:  <input type="text" onChange ={props.handleTags} placeholder={props.assets.tags}/><br/>
        <br/>
        Artist:  <input type="text" onChange ={props.handleArtist} placeholder={props.assets.artist}/><br/>
        <br/>
        {/* Owner:  <input type="text" onChange ={props.handleOwner}/><br/>
        <br/> */}
        {/* Title of collection:  <input type="text" onChange ={props.handleCollection_Title}/><br/>
        <br/> */}
        {/* Collection image:  <input type="text" onChange ={props.handleCollection_Image}/><br/>
        <br/> */}
        Data url:  <input type="text" onChange ={props.handleData_URL} placeholder={props.assets.data_URL}/><br/>
        <br/>
        # of Bids:  <input type="number" onChange ={props.handleBid_Count} placeholder={props.assets.bid_count}/><br/>
        <br/>
        Bid price:  <input type="text" onChange ={props.handleBid_Price} placeholder={props.assets.bid_price}/><br/>
        <br/>
        # of sales:  <input type="number" onChange ={props.handleSales_Count} placeholder={props.assets.sales_count}/><br/>
        <br/>
        Sale price:  <input type="text" onChange ={props.handleSales_Price} placeholder={props.assets.sales_price}/><br/>
        <br/> 
        <input type="submit" value="Submit"/>
      </form>
      {/* <button onClick={props.editView}> Cancel </button> */}
      </div>
    )
  }
  export default EditNFT