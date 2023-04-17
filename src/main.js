import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import StartPage from './startScreen';
import './index.css'


const App = () => {
  return <StartPage/>;
};

createRoot(document.getElementById('root')).render(<App />);
