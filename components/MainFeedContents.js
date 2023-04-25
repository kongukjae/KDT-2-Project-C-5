import React, { useState } from 'react';



const MainFeedContents = () => {

  const [popularReview, setPopularReview] = useState('첫 화면(인기 리뷰)');
  const [liveReview, setLiveReview] = useState('');
  // 인기 리뷰 클릭시 상태 변환 함수 setPopularReview를 이용하여 변화시킬 내용
  const onClickPopular = () => {
    setPopularReview('인기 리뷰');
    // 인기 리뷰 클릭 시 실시간 리뷰는 안보이게 처리
    setLiveReview('');
  };
  // 실시간 리뷰 클릭시 상태 변환 함수 setLiveReview를 이용하여 변화시킬 내용
  const onClickLive = () => {
    setLiveReview('실시간 리뷰')
    // 실시간 리뷰 클릭 시 인기 리뷰는 안보이게 처리
    setPopularReview('');
  };

  return (
    <div>
      <header>
        {/* 인기 리뷰, 실시간 리뷰 클릭 시 상태 변환 */}
        <div onClick={onClickPopular}>인기 리뷰</div>
        <div onClick={onClickLive}>실시간 리뷰</div>
      </header>

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