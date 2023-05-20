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


const ReviewInput=(props)=>{
  const[shortReview,setShortReview]=useState("");
  const[longReview,setLongReview]=useState("");

  

  const fetchFomr=(e)=>{
    e.preventDefault();

    const formData={
      short:shortReview,
      long:longReview
    }
    console.log(formData);
    fetch('/submit-url',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // 서버 응답 처리
      console.log(data);
    })
    .catch(error => {
      // 에러 처리
      console.error(error);
    });


  };
  

  


  return(
    <form action="/submit-url" method="post">
      <div style={container}>
        <div>
          <input 
          style={inputThree}
          type='text'
          id='shortReview'
          name='shortReview'
          value={shortReview}
          onChange={(e)=>{setShortReview(e.target.value)}}
          ></input>
        </div>

        <div>
          <input 
          style={inputContext}
          type='text'
          id='longReview'
          name='longReview'
          value={longReview}
          onChange={(e)=>{setLongReview(e.target.value)}}
          ></input>
        </div>
      </div>
      <button type="submit" >Submit</button>
    </form>
  );
}


export default ReviewInput;