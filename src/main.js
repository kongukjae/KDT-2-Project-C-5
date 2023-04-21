import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen';
import Login from './login';
import LoginPage from './loginPage';
import SignUpPage from './signUp';
import Router from './router';
import './index.css';


const App = () => {
  return <LoginPage/>;
};

createRoot(document.getElementById('root')).render(<App />);
