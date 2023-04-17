import React from 'react';

const login = () => {
  // input 스타일 객체 지정
  const inputStyle = {
    width: '150%',
    height: '54px',
    backgroundColor: '#D9D9D9',
    border: '1px solid #D9D9D9',
    borderRadius: '20px',
    textAlign: 'center'
  }

  return (
    <div id='login-page'>
      <div>BOOK STAGRAM</div>
      <div>
        <form>
          <p><b>ID</b></p>
          <div><input type="text" placeholder='ID를 입력하세요' name='id' style={inputStyle}></input></div>
          <p><b>password</b></p>
          <div><input type="password" placeholder='password를 입력하세요' name='password' style={inputStyle}></input></div>
        </form>
      </div>
      <div>login</div>
      <div></div>
      <div>
        <div>sign up with google</div>
        <div>sign up with apple account</div>
        <div>sign up</div>
        <p>forgot account?</p>
      </div>
    </div>
  );
};

export default login;