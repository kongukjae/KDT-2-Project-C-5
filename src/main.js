import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import StartPage from "./startScreen";
import Login from "./login";
import LoginPage from "./loginPage";
import SignUpPage from "./signUp";
import Router from "../components/router";
import MainFeed from "./mainFeed";
import NavBar from "../components/NavBar";
import "./index.css";
import ReviewPage from "./ReviewPage";
import BookReviewFeed from "./BookReviewFeed";
import FollowerFollowing from './FollowerFollowing';
import AlarmSetting from "../components/AlarmSetting";
import BlockedUser from "./BlockedUser";
import AccountSetting from "./AccountSetting";
import TopMenu from "./TopMenu";

const App = () => {
  return (
    <div>
      <TopMenu/>
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
