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
import TopMenu from "./TopMenu";

const App = () => {
  return (
    <div>
      <TopMenu />
      <NavBar />
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
