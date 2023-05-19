import React, { useState } from 'react';

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
  const[review,setReview]=useState({
    shortReview:'',
    longReview:'',
  });

  const handleChange = (e) => {
    setReview({...review,[e.target.name]: e.target.value});
  };

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(review);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div style={container}>
        <div>
          <input 
          style={inputThree}
          type='text'
          id='shortReview'
          name='shortReview'
          value={review.shortReview}
          onChange={handleChange}
          ></input>
        </div>

        <div>
          <input 
          style={inputContext}
          type='text'
          id='longReview'
          name='longReview'
          value={review.longReview}
          onChange={handleChange}
          ></input>
        </div>
      </div>
    </form>
  );
}


export default ReviewInput;