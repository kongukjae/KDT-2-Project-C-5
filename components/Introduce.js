import React, {useState} from 'react';

const introSt={
  display:"flex",
  width:"70%",
  height:"80%",
  justifyContent:"center",
  alignItems:"center",
  border:"1px solid black",
  borderRadius:"15px"
}
const textBox={
  width:"90%",
  height:"90%"
}
const container={
  display:"flex",
  flexDirection:"row",
  width:"100%",
  height:"100px",
  justifyContent:"space-around",
  alignItems:"center"

}

const imgBox={
  width:"80px",
  height:"80px",
  borderRadius:"50%",
  backgroundColor:"#D9D9D9"
}

//마이페이지의 프로필사진과 자기소개를 담당하는 컴포넌트
const introduce=()=>{
  const[intro,setIntro]=useState("안녕하세요.");


  return(
    <div style={container}>
      <div style={imgBox}>
        <img></img>
      </div>

      <div style={introSt}>
        <div style={textBox}>{intro}</div>
      </div>
    </div>
  )
}

export default introduce;