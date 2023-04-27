import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen';
import MainFeed from './login';
import LoginPage from './loginPage';
import SignUpPage from './signUp';
import Router from './router';
import NavBar from '../components/NavBar';
import './index.css';
import Mypage from './mypage';


const App = () => {
  return <Mypage/>;
  /* return <NavBar/> */
};

createRoot(document.getElementById('root')).render(<App />);

export default main;