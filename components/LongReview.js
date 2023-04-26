import React from "react";

export default function App() {

  return (
    //전체 컨테이너
    <div>
      <div>
        <p>사용자 정보 컨테이너</p>

        <div>"사용자 프로필 이미지"</div>
        <div>사용자 이름</div>
        <div>알림 아이콘</div>
      </div>
      <div>
        <p>책정보 컨테이너</p>

        <div>"책 커버 이미지"</div>
        <div>책 기본정보 컨테이너</div>
      </div>
      <div>
        <p>긴 리뷰글 컨테이너</p>
        <div>
          <span>조회기록</span>
          <span>작성시간</span>
        </div>

        <div>사용자 리뷰</div>
        <button>저장 또는 공유하기</button>
        <div>
          <p>좋아요 컨테이너</p>
          
          <div>좋아요 갯수</div>
          <div>아이콘</div>
        </div>
      </div>
    </div>
  )
}