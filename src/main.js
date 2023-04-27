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
import Mylibrary from './mylibrary';


const App = () => {
  return <Mylibrary/>;
  /*  <NavBar/> Mypage */
};

createRoot(document.getElementById('root')).render(<App />);

export default main;