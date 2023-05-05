import React from 'react';


import TagBox from './TagBox';

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
  width:"300px",
  height:"500px",
  backgroundColor:"#B0A7A7",
  borderRadius:"7px",
  justifyContent:"center",
  alignItems:"center",


}
const TagContentBox=()=>{
  const tags=["공포","로맨스","사랑","멜로","호러","수사","모순","비극","역사","실화","감동"]

  return(
    <div style={container}>
      <div style={contentBox}>
        {tags.map((item,index)=>(
          <TagBox 
          key={index} 
          tagName={item}></TagBox>
        ))}
      </div>

    </div>
  );
}


export default TagContentBox;