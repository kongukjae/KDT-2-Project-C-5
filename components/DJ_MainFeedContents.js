import React, { useState } from 'react';
import PopularReview from './DJ_PopularReview';
import LiveReview from './DJ_LiveReview';
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
}

const tabStyle = {
  cursor: 'pointer'
}

const conStyle = {
  backgroundColor: '#D9D9D9'
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

  return (
    <div style={conStyle}>
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

      <main>
        <div>
          {popularReview}
          {liveReview}
        </div>
      </main>
      
    </div>
  );
};

export default MainFeedContents;