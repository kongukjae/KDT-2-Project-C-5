import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const test = () => {
  const nav=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      nav('/login')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <div>
    <div id='start-logo'>BOOK STAGRAM</div>
    </div>
}

export default test;