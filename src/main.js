import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Logo from "./startScreen";
import LoginPage from "./loginPage";
import SignUp from "./signUp";
import AccountSetting from "./AccountSetting";
import BlockedUser from "./BlockedUser";
import FollowerFollowing from "./FollowerFollowing";
import ReviewPage from "./ReviewPage";
import MainFeed from "./mainFeed";

import "./index.css";
import BookReviewFeed from "./bookReviewFeed";

const App = () => {
  return (
    <div>
      {/* <BookReviewFeed /> */}
      <ReviewPage />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Logo/>} />
    //     <Route path="/login" element={<LoginPage/>} />
    //     <Route path="/signUp" element={<SignUp/>} />
    //     <Route path="/accountSetting" element={<AccountSetting/>} />
    //     <Route path="/lockedUser" element={<BlockedUser/>} />
    //     <Route path="/mainFeed" element={<NavBar/>} />
    //     <Route path="/followerSetting" element={<FollowerFollowing/>}/>
    //     <Route path="/review" element={<ReviewPage/>}/>

    //   </Routes>

    // </Router>
  );
};
createRoot(document.getElementById("root")).render(<App />);
