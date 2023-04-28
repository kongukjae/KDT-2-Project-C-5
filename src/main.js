<<<<<<< HEAD
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


const App = () => {
<<<<<<< HEAD
  return <LoginPage/>;
=======
=======
>>>>>>> 70295106 (NavBer.js <Route path=/page3 element={<ReviewPage />} />)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return <NavBar/>;
};
>>>>>>> a1295a47 (메인 페이지에 인기, 실시간 리뷰 콘텐츠 조립)
=======
import Notification from "../components/NotificationTab";
>>>>>>> 1b802b03 (알림-> 알림페이지 전환하기)
=======
import NotificationTab from "../components/NotificationTab";
>>>>>>> 278ad7d4 (main.js <NotificationTab /> 랜더가 안됨)

const App = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return <ReviewPage />;
>>>>>>> 6de1ff8d (검색,피드작성 폼작성)
=======
  return <book_review_feed />;
>>>>>>> bc20f1e5 (main.js에 import)
=======
  return <Book_review_feed />;
>>>>>>> 65d90995 (<div style={{ display: flex }}>)
=======
  return <BookReviewFeed />;
>>>>>>> f69bbdda (issue16/BookReviewFeed책정보와 긴글리뷰)
=======
  return <TopMenu />;
>>>>>>> a29e54e0 (HamVergerMenu.js생성)
=======
  return (
    <div>
      <NotificationTab />
    </div>
  );
>>>>>>> 70295106 (NavBer.js <Route path=/page3 element={<ReviewPage />} />)
};
createRoot(document.getElementById("root")).render(<App />);
