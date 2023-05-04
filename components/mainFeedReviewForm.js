import React, { useState }from 'react';

// 임시 css 속성의 크기는 figma 목업 사이즈를 참조하였다.
// 전체 리뷰 container 박스 임시 css
const conStyle = {
  width: '357px',
  height: '155px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  border: '1px solid black',
  borderRadius: '10px',
  alignItems:"center"
}



const picBox={
  display:"flex",
  width:"70px",
  height:"90%",
  backgroundColor:"red",
  justifyContent:"center",

}

const reviewBox={
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  width:"250px",
  height:"90%",
  
}

const infoBox={
  display:"flex",
  flexDirection:"row",
  justifyContent:"flex-end"
}



//책 사진, 프로필 사진,이름 , 리뷰 내용, 시간, 좋아요 수, 좋아요 상태
const mainFeedReviewForm = (props) => {
  const[bookPic,setBookPic]=useState(props.bookPic);
  const[profilePic,setProfilePic]=useState(props.profilePic);
  const[name,setName]=useState(props.name);
  const[review,setReview]=useState(props.review);
  const[time,setTime]=useState(props.time);
  const[like,setLike]=useState(props.like);
  const[likeState,setLikeState]=useState(props.likeState);





  return (


    <div style={conStyle}>
      <div style={picBox}>
        <div>사진</div>
      </div>
      <div style={reviewBox}>

        <div>
          {/* <img>{profilePic}</img> */}
          <div>{name}</div>
        </div>

        
        <div>{review}</div>

        <div style={infoBox}>
          <div>{time}</div>
          <div>{like}</div>
          {/* {likeState ? <img>하트1</img> : <img>하트2</img>} */}
        </div>
      </div>
    </div>
  );
};

export default mainFeedReviewForm;
