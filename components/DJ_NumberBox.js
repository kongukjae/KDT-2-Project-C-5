import React ,{useState} from 'react';


const outBox={
  display:"flex",
  flexDirection:"column",
  widht:"30px",
  height:"50px",
  justtifyContent:"center",
  alignItems:"center",
}

const box={
  display:"flex",
  flexDirection:"column",
  widht:"100%",
  height:"100%",
  justtifyContent:"center",
  alignItems:"center"
}

const numSt={
  fontSize:"25px"
}

const textSt={
  fontSize:"10px"
}

const numberBox=(props)=>{
  const[num,setNum]=useState(props.num);
  const[text,setText]=useState(props.text);

  return(
    <div style={outBox}>
      <div style={box}>
        <div style={numSt}>{num}</div>
        <div style={textSt}>{text}</div>
      </div>
    </div>
  );
}


export default numberBox;