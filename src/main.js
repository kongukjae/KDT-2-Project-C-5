import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./startScreen";
import Login from "./login";
import LoginPage from "./loginPage";
import SignUp from "./signUp";
import MainFeed from "./mainFeed";
import NavBar from "../components/NavBar";
import "./index.css";
import ReviewPage from "./ReviewPage";
import BookReviewFeed from "./BookReviewFeed";
import FollowerFollowing from "./FollowerFollowing";
import AlarmSetting from "../components/AlarmSetting";
import BlockedUser from "./BlockedUser";
import AccountSetting from "./AccountSetting";
import TopMenu from "./TopMenu";
import PopularReview from "../components/PopularReview";
import LiveReview from "../components/LiveReview";
import Bookcover from "../components/bookcover";

const App = () => {
  return (
    <div>
      f{/* <Bookcover /> */}
      <TopMenu />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Logo/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/accountSetting" element={<AccountSetting/>} />
          <Route path="/lockedUser" element={<BlockedUser/>} />
          <Route path="/mainFeed" element={<MainFeed/>} />
          <Route path="/followerSetting" element={<FollowerFollowing/>}/>
          <Route path="/review" element={<ReviewPage/>}/>
      </Routes>
    </Router> */}
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
