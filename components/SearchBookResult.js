import React from 'react';



const contentBox={
  display:"flex",
  width:"95%",
  height:"95%",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignContent:"flex-start",
  flexWrap:"wrap",
}

const container={
  display:"flex",
  width:"98%",
  height:"500px",
  backgroundColor:"#B0A7A7",
  borderRadius:"7px",
  justifyContent:"center",
  alignItems:"center",


}
//검색 결과를 담는 컨테이너 컴포넌트
//김동주
const SearchBookResult = () => {
  return (
    <div style={container}>
      <div style={contentBox}>
        
      </div>
    </div>
  );
};

export default SearchBookResult;