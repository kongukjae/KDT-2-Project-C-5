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

  const [popularReview, setPopularReview] = useState(<PopularReview Handle={handle}/>);
  const [liveReview, setLiveReview] = useState('');
  const [state,setState]=useState(false);
  // 인기 리뷰 클릭시 상태 변환 함수 setPopularReview를 이용하여 변화시킬 내용
  const onClickPopular = () => {
    setPopularReview(<PopularReview Handle={handle}/>);
    // 인기 리뷰 클릭 시 실시간 리뷰는 안보이게 처리
    setLiveReview('');
  };

  // 실시간 리뷰 클릭시 상태 변환 함수 setLiveReview를 이용하여 변화시킬 내용
  const onClickLive = () => {
    setLiveReview(<LiveReview Handle={handle}/>);
    // 실시간 리뷰 클릭 시 인기 리뷰는 안보이게 처리
    setPopularReview('');
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
            state ? (<BookReviewFeed/>):<PopularReview Handle={handle}/>
          }
          
        </div>
      </main>
      
    </div>
  );
};

export default MainFeedContents;