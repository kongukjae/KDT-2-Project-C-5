import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchPage from "./JK-SearchPage";
import Mypage from "./JK-Mypage";
import Logo from "./JK-startScreen"
import LoginPage from "./JK-loginPage";
import SignUp from "./JK-signUp";
import AccountSetting from "./JK-AccountSetting";
import BlockedUser from "./JK-BlockedUser";
import FollowerFollowing from "./JK-FollowerFollowing";
import ReviewPage from "./JK-ReviewPage";
import MainFeed from "./JK-mainFeed";
import MainFeedReviewForm from "../components/JK-mainFeedReviewForm";
import NavBar from "./JK-NavBar"
import "./index.css";
import ChallengePage from "./JK-challengePage";
import MainFeedContents from "../components/JK-MainFeedContents";


// 테스트를 위한 임시 코드
// const Page1 = () => <h1>실시간, 인기 리뷰 피드</h1>;
// const Page2 = () => <h1>챌린지 피드</h1>;
// const Page3 = () => <h1>글작성 피드</h1>;
// const Page4 = () => <h1>검색 피드</h1>;
// const Page5 = () => <h1>내 정보 피드</h1>;


const App = () => {
  return (
    <ChallengePage/>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Logo/>} />
    //     <Route path="/login" element={<LoginPage/>} />
    //     <Route path="/signUp" element={<SignUp/>} />
    //     <Route path="/accountSetting" element={<AccountSetting/>} />
    //     <Route path="/lockedUser" element={<BlockedUser/>} />
    //     <Route path="/mainFeed" element={<MainFeed/>} />
    //     <Route path="/followerSetting" element={<FollowerFollowing/>}/>
    //     <Route path="/review" element={<ReviewPage/>}/>
    //     <Route path="/mypage" element={<Mypage/>}/>
    //     <Route path="/searchPage" element={<SearchPage/>}/>
        
    //   </Routes>
      
    // </Router>   

  );
};
createRoot(document.getElementById("root")).render(<App />);
