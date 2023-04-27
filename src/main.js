import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen';
import Login from './login';
import LoginPage from './loginPage';
import SignUpPage from './signUp';
import Router from '../components/router';
import MainFeed from './mainFeed';
import NavBar from '../components/NavBar';
import MainFeedReviewForm from '../components/MainFeedReviewForm';
import ButtonCancle from '../components/ButtonCancle';
import FollowerFollowing from '../components/FollowerFollowing';
import PopularReview from '../components/PopularReview';
import LiveReview from '../components/LiveReview';
import FollowerList from '../components/FollowerList';
import './index.css';


const App = () => {
  return <FollowerFollowing/>;
};

createRoot(document.getElementById('root')).render(<App />);
