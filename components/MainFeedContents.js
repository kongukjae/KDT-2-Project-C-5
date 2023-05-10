import React, { useState } from 'react';
import PopularReview from './PopularReview';
import LiveReview from './LiveReview';
import BookStagramTopLogo from './BookStagramTopLogo';
import AlarmForm from './AlarmForm';
import Hamburger from './Hamburger';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  height:"5%"
}

const tabStyle = {
  cursor: 'pointer'
}

const conStyle = {
  backgroundColor: '#D9D9D9',
  height:"100%"
}

const container={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  height:"75%"
}



const MainFeedContents = () => {

  const [popularReview, setPopularReview] = useState(<PopularReview/>);
  const [liveReview, setLiveReview] = useState('');

  // 인기 리뷰 클릭시 상태 변환 함수 setPopularReview를 이용하여 변화시킬 내용
  const onClickPopular = () => {
    setPopularReview(<PopularReview/>);
    // 인기 리뷰 클릭 시 실시간 리뷰는 안보이게 처리
    setLiveReview('');
  };

  // 실시간 리뷰 클릭시 상태 변환 함수 setLiveReview를 이용하여 변화시킬 내용
  const onClickLive = () => {
    setLiveReview(<LiveReview/>);
    // 실시간 리뷰 클릭 시 인기 리뷰는 안보이게 처리
    setPopularReview('');
  };
  const box={
    height:"95%"
  }
  return (
    <div style={container}>
      {/* <header style={headerStyle}>
        <AlarmForm/>
        <BookStagramTopLogo/>
        <Hamburger/>
      </header> */}
      <nav style={navStyle}>
        {/* 인기 리뷰, 실시간 리뷰 클릭 시 상태 변환 */}
        <div style={tabStyle} onClick={onClickPopular}><b>인기 리뷰</b></div>
        <div style={tabStyle} onClick={onClickLive}><b>실시간 리뷰</b></div>
      </nav>

      <main style={box}>
        <div style={conStyle}>
          {popularReview}
          {liveReview}
        </div>
      </main>
      
    </div>
  );
};

export default MainFeedContents;