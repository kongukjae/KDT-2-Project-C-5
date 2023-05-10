import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import signUp from './signUp';

const logo = () => {

  const nav=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      nav('/login')
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <div>
    <div id='start-logo'>BOOK STAGRAM</div>
    </div>
}

export default logo;