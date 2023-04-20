import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import StartPage from './startScreen';
import LoginPage from './login';
import SignUpPage from './signUp';
import Router from './router';
import './index.css'


const App = () => {
  return <LoginPage/>;
};

createRoot(document.getElementById('root')).render(<App />);
