// 회원 가입 컴포넌트이다.
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BookStagramTopLogo from '../components/JK-BookStagramTopLogo';
import InputId from '../components/JK-InputId';
import InputPwd from '../components/JK-InputPwd';
import ButtonSubmit from '../components/JK-ButtonSubmit';
import InputEmail from '../components/JK-InputEmail.js';
import InputUserName from '../components/JK-InputUserName';
import InputProfilePic from '../components/JK-InputProfilePic';
import InputPwdCheck from '../components/JK-InputPwdCheck';
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