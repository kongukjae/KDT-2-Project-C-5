import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen';
import Login from './login';
import LoginPage from './loginPage';
import SignUpPage from './signUp';
import Router from './router';
import MainFeed from './mainFeed';
import NavBar from '../components/NavBar';
import MainFeedReviewForm from './mainFeedReviewForm';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignUp from '../components/ButtonSignUp';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle';
import ButtonSubmit from '../components/ButtonSubmit';
import ForgotAccount from '../components/ForgotAccount'
import Hamburger from '../components/Hamburger'
import InputEmail from '../components/InputEmail';
import InputId from '../components/InputId';
import InputProfilePic from '../components/InputProfilePic';
import InputPwd from '../components/InputPwd';
import InputPwdCheck from '../components/InputPwdCheck';
import InputUserName from '../components/InputUserName';
import MainFeedContents from '../components/MainFeedContents';
import './index.css';


const App = () => {
  return <SignUpPage/>;
};

createRoot(document.getElementById('root')).render(<App />);
