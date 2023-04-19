import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import StartPage from './startScreen';
import LoginPage from './login';
import Router from './router';
import './index.css'


const App = () => {
  return <Router/>;
};

createRoot(document.getElementById('root')).render(<App />);
