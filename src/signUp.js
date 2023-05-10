// 회원 가입 컴포넌트이다.
import React from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonSubmit from '../components/ButtonSubmit';
import InputEmail from '../components/InputEmail.js';
import InputUserName from '../components/InputUserName';
import InputProfilePic from '../components/InputProfilePic';
import InputPwdCheck from '../components/InputPwdCheck';
import './index.css';


const signUp = () => {
  //네비게이트 함수 사용
  const navigate = useNavigate();
  //submit이 눌렸을 경우 실행하는 함수
  function submitSignUpForm(event) {
    event.preventDefault();
    //console.log(event.target);
    const formData = new FormData(event.target);
    const signUpForm = {};
    for (let [name, value] of formData.entries()) {
      signUpForm[name] = value;
    }
    //console.log(signUpForm);
    navigate("/favortag", {state: signUpForm});
  }
  


  return (

    <form type="method" onSubmit={submitSignUpForm}>
      <BookStagramTopLogo />
      <InputProfilePic />
      <InputId />
      <InputEmail />
      <InputUserName />
      {/* <InputPwd/> */}
      <InputPwdCheck />
        <ButtonSubmit />
    </form>
  );
};


export default signUp;