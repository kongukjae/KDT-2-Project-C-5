import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonSubmit from '../components/ButtonSubmit';
import InputEmail from '../components/InputEmail';
import InputUserName from '../components/InputUserName';
import InputProfilePic from '../components/InputProfilePic';
import InputPwdCheck from '../components/InputPwdCheck';
import './index.css';


const signUp = () => {
  return (
    
    <div>
      <BookStagramTopLogo/>
      <InputProfilePic/>
      <InputId/>
      <InputEmail/>
      <InputUserName/>
      {/* <InputPwd/> */}
      <InputPwdCheck/>
      <ButtonSubmit/>
    </div>
  );
};

export default signUp;