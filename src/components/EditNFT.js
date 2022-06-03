const EditNFT = (props) => {
    return (
      <div>
        <form onSubmit={(event)=>{props.handleEdit(event, props.assets)}}>
         Image: <input type="text" onChange={props.handlePrimary_Image} placeholder={props.assets.primary_Image}/><br/>
        <br/> 
        Title:  <input type="text" onChange={props.handleTitle} placeholder={props.assets.title}/><br/>
        <br/>
         Description: <input type="text" onChange={props.handleDescription}/><br/>
        <br/>
        Date created: <input type="text" onChange={props.handleCreatedDate}/><br/>
        <br/>
        {/* Additonal images: <input type="text" onChange ={props.handleAdditionalImages}/><br/>
        <br/> */}
        tags:  <input type="text" onChange ={props.handleTags}/><br/>
        <br/>
        Artist:  <input type="text" onChange ={props.handleArtist}/><br/>
        <br/>
        Owner:  <input type="text" onChange ={props.handleOwner}/><br/>
        <br/>
        {/* Title of collection:  <input type="text" onChange ={props.handleCollection_Title}/><br/>
        <br/> */}
        {/* Collection image:  <input type="text" onChange ={props.handleCollection_Image}/><br/>
        <br/> */}
        Data url:  <input type="text" onChange ={props.handleData_URL}/><br/>
        <br/>
        # of Bids:  <input type="number" onChange ={props.handleBid_Count}/><br/>
        <br/>
        Bid price:  <input type="number" onChange ={props.handleBid_Price}/><br/>
        <br/>
        # of sales:  <input type="number" onChange ={props.handleSales_Count}/><br/>
        <br/>
        Sale price:  <input type="number" onChange ={props.handleSales_Price}/><br/>
        <br/> 
        <input type="submit" value="Submit edit"/>
      </form>
      {/* <button onClick={props.editView}> Cancel </button> */}
      </div>
    )
  }
  export default EditNFT