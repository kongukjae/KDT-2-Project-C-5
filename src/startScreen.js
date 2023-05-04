import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import signUp from './signUp';

const logo = () => {

  const nav=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      nav('/login')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

=======

const test = () => {
  const nav=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      nav('/login')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

>>>>>>> nowkwon97/issuetest
  return <div>
    <div id='start-logo'>BOOK STAGRAM</div>
    </div>
}

export default logo;