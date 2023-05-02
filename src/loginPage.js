import React, { useState } from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount';
import ButtonSignUp from '../components/ButtonSignUp';
import ForgotAccount from '../components/ForgotAccount';

const loginPage = () => {

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = (event) => {
    // 기본 제출 이벤트 방지
    event.preventDefault();
    
    const requestBody = { id, pwd };
    
    fetch('/login', {
      // HTTP 요청 메서드 지정
      method: 'POST',
      // HTTP 요청 헤더 지정
      // 요청 본문에 클라이언트가 서버에 JSON 형태의 데이터를 담아 보낼 것을 명시
      headers: { 'Content-Type': 'application/json' },
      // HTTP 요청 본문에 담을 데이터를 지정
      // id, pwd를 JSON 형태의 문자열로 변환하여 본문에 보냄
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        
        return response.json();
      })
      .then(data => {
        // 로그인 성공 처리
      })
      .catch(error => {
        console.error(error);
        // 로그인 실패 처리
      });
  };

  return (
    <div>
      <BookStagramTopLogo/>
      <div>
        <form onSubmit={handleLogin}>
          <InputId/>
          <p><b>password</b></p>
          <InputPwd/>
          <ButtonLogin/>
        </form>
      </div>
      
      
      <div></div>
      <div>
        <ButtonSignUpWithGoogle/>
        <ButtonSignUpWithAppleAccount/>
        <ButtonSignUp/>
        <ForgotAccount/>
      </div>
    </div>
  );
};

export default loginPage;