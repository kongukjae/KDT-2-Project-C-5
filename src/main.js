import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import StartPage from './startScreen';
import LoginPage from './login';
import './index.css'


const App = () => {
  // return <LoginPage/>;
  return (
    <Router>
      <Route path='/' component={StartPage} />
      <Route path='/login' component={LoginPage} />
    </Router>
  )
};

createRoot(document.getElementById('root')).render(<App />);
