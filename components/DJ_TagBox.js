import React ,{useState}from "react";


const box={
  display:"flex",
  height:"30px",
  minWidth:"40px",
  borderRadius:"7px",
  backgroundColor:"#D9D9D9",
  justifyContent:"center",
  alignItems:"center",
  marginLeft:"3px",
  marginTop:"3px"
}



//태그를 담는 컨테이너 및 스타일링 담당
const TagBox=(props)=>{
  const[tagName,setTagName]=useState(props.tagName);
  return(
    <div style={box}>
      <div>{tagName}</div>

    </div>

  );
}

export default TagBox;