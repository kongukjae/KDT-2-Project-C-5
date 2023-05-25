import React,{useState} from 'react'

import NumberBox from './NumberBox';

const container={
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-around",
  width:"100%",
  height:"50px"

}

const nameBox={
  display:"flex",
  flexDirection:"column",
  fontSize:"25px"

}

const numContainer={
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-evenly",
  width:"280px"
}

//마이페이지 프로필 이름과 게시글,구독자,구독인 수를 담당하는 컴포넌트
//김동주
const profileName=(props)=>{
  const[name,setName]=useState(props.name);

  return(
    <div style={container}>
      <div style={nameBox}>
        <div>{name}</div>
      </div>

    <div style={numContainer}>
      <NumberBox num="3" text="게시글"></NumberBox>
      <NumberBox num="2" text="구독자"></NumberBox>
      <NumberBox num="25" text="구독인"></NumberBox>
    </div>


    </div>
  );
}


export default profileName;