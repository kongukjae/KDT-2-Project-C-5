<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen';
import LoginPage from './loginPage';
// import SignUpPage from './signUp';
// import Router from '../components/router';
// import MainFeed from './mainFeed';
// import NavBar from '../components/NavBar';
// import MainFeedReviewForm from '../components/mainFeedReviewForm';
// import ButtonCancle from '../components/ButtonCancle';
// import FollowerFollowing from '../components/FollowerFollowing';
import './index.css';
=======
import React from "react";

import { createRoot } from "react-dom/client";
import LoginPage from "./loginPage"
//import NavBar from "../components/NavBar";
import "./index.css";
>>>>>>> 0bbcf6781f68dc5a7e1be06cf83286d30776fc68


const App = () => {
  return (
    <LoginPage />
  );
};
createRoot(document.getElementById("root")).render(<App />);
