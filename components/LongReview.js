import React from "react";
// 사용하는 컴포넌트들
// 사용자 정보
import FeedTopBar from "../components/FeedTopBar.js"
// 책 정보
import BookInfo from "../components/BookInfo.js"
// 긴 리뷰글
import UploadTime from "../components/UploadTime.js"
export default function LongReview() {

  return (
    <div>
      <FeedTopBar />
      <BookInfo />
      <div>
        <p>긴 리뷰글 컨테이너</p>

        <div>
          <span>조회기록</span>
          <UploadTime />
        </div>

        <div>사용자 리뷰</div>
        
        <div>
          <button>저장 또는 공유하기</button>
          <span>좋아요 갯수</span>
          <span>아이콘</span>
        </div>
      </div>
    </div>
  )
}