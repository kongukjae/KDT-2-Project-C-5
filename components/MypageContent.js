import React , {useState}from "react"

import MyPost from "./MyPost"

const barContainer={
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-around",
  width:"100%",
  hegith:"40px"
}

const feed={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  hegith:"500px",
  maxHeight:"500px",
  
}



//마이페이지에서 사용하는 나의글,프로필 설정,내 서재 bar와 나의 글 컨텐츠를 담당하는 컴포넌트
//김동주
const MypageContent=()=>{
  const[contentArea,setContentArea]=useState(<MyPost/>)

  return(
    <div>
      <div style={barContainer}>
        <div>나의 글</div>
        <div>프로필 설정</div>
        <div>내 서재</div>
        
      </div>
      <hr />
      <div style={feed}>
        {contentArea}
      </div>
    </div>

  );
}


export default MypageContent;