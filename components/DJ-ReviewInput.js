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
      <div>
        <input style={inputThree}></input>
      </div>
      <div>
        <input style={inputContext}></input>
      </div>
    </div>
  );
}


export default ReviewInput;