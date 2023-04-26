import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import StartPage from "./startScreen";
import Login from "./login";
import LoginPage from "./loginPage";
import SignUpPage from "./signUp";
import Router from "./router";
import MainFeed from "./mainFeed";
import NavBar from "../components/NavBar";
import "./index.css";
import ReviewPage from "./ReviewPage";

const App = () => {
  return <book_review_feed />;
};

createRoot(document.getElementById("root")).render(<App />);
