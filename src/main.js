import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchPage from "./SearchPage";
import Mypage from "./Mypage";
import Logo from "./startScreen";
import LoginPage from "./loginPage";
import SignUp from "./signUp";
import AccountSetting from "./AccountSetting";
import BlockedUser from "./BlockedUser";
import FollowerFollowing from "./FollowerFollowing";
import ReviewPage from "./ReviewPage";
import MainFeed from "./mainFeed";
import MainFeedReviewForm from "../components/mainFeedReviewForm";
import NavBar from "./NavBar";
import ChallengePage from "./challengePage";
import "./index.css";
import NotificationList from "../components/NotificationList";
import FavorTag from "./favortag";
//테스트용 PostReview추가
import PostReview from "./PostReview";

// 테스트를 위한 임시 코드
const Page1 = () => <h1>실시간, 인기 리뷰 피드</h1>;
const Page2 = () => <h1>챌린지 피드</h1>;
const Page3 = () => <h1>글작성 피드</h1>;
const Page4 = () => <h1>검색 피드</h1>;
const Page5 = () => <h1>내 정보 피드</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/accountSetting" element={<AccountSetting />} />
        <Route path="/lockedUser" element={<BlockedUser />} />
        <Route path="/mainFeed" element={<MainFeed />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/followerSetting" element={<FollowerFollowing />} />
        {/* 포스트 리뷰용 라우터 링크 */}
        <Route path="/review" element={<PostReview />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/NotifictionList" element={<NotificationList />} />
        <Route path="/favortag" element={<FavorTag />} />
      </Routes>
    </Router>
  );
};
createRoot(document.getElementById("root")).render(<App />);
