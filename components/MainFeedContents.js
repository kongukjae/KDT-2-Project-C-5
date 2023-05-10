import React, { useState } from 'react';
import PopularReview from './PopularReview';
import LiveReview from './LiveReview';
import BookStagramTopLogo from './BookStagramTopLogo';
import AlarmForm from './AlarmForm';
import Hamburger from './Hamburger';
import BookReviewFeed from '../src/bookReviewFeed';
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
}

const tabStyle = {
  cursor: 'pointer'
}

const conStyle = {
  backgroundColor: '#D9D9D9'
}

const MainFeedContents = () => {

  const [isLive,setIsLive]=useState("true");
  const [state,setState]=useState(false);
  // 인기 리뷰 클릭시 상태 변환 함수 setPopularReview를 이용하여 변화시킬 내용
  const onClickPopular = () => {
    setIsLive(false);
  };

  // 실시간 리뷰 클릭시 상태 변환 함수 setLiveReview를 이용하여 변화시킬 내용
  const onClickLive = () => {
    setIsLive(true);
  };

  const handle=()=>{
    console.log("handle clicked");
    setState(!state);
  }

  return (
    <div style={conStyle}>
      {/* <header style={headerStyle}>
        <AlarmForm/>
        <BookStagramTopLogo/>
        <Hamburger/>
      </header> */}
      <nav style={navStyle}>
        {/* 인기 리뷰, 실시간 리뷰 클릭 시 상태 변환 */}
        <div style={tabStyle} onClick={onClickLive}><b>실시간 리뷰</b></div>
        <div style={tabStyle} onClick={onClickPopular}><b>인기 리뷰</b></div>
      </nav>

      <main>
        <div>
          {
            isLive? (
            state? <BookReviewFeed/>:<PopularReview Handle={handle}/>

            ) : (

              state?  <BookReviewFeed/>:<LiveReview Handle={handle}/>
            )

          }
          
        </div>
      </main>
      
    </div>
  );
};

export default MainFeedContents;