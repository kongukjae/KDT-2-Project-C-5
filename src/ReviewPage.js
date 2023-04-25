import React, { useState } from "react";
import Search from "../components/Search";
import PostInput from "../components/PostInput";

function ReviewPage() {
  return (
    <div>
      <div className={styles.reviewPage}></div>
      <div className={styles.reviewContainer}></div>
      {/* 리뷰 컴포넌트들 */}
      <Search />
      <PostInput />
    </div>
  );
}

export default ReviewPage;
