import React from 'react';

const container={
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  width:"100%",
  height:"60%"
}

const inputThree={
  width:"100%",
  height:"70px",
  border:"none",
  borderRadius:"5px",

}

const inputContext={
  width:"100%",
  height:"150px",
  border:"none",
  borderRadius:"5px"

}


const ReviewInput=()=>{


  return(
    <div style={container}>
      <label htmlFor="summary">
        Summary:
        <input type="text" id="summary" name="summery" style={inputThree} />
      </label>
      <label htmlFor="body">
        Body:
        <input type="text" id="body" name="body" style={inputContext} />
      </label>
    </div>
  );
}


export default ReviewInput;