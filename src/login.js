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
          {/* form이 서버에 제출될 때 'name'속성 값은 해당 입력 필드의 값을 나타내는 키(key) 역할을 한다. 입력된 값은 이 키(key)와 함께 서버로 전송된다.*/}
          <div><input type="text" placeholder='ID를 입력하세요' name='id' style={inputStyle}></input></div>
          <p><b>password</b></p>
          <div><input type="password" placeholder='password를 입력하세요' name='password' style={inputStyle}></input></div>
        </form>
      </div>
      <button type='submit'>login</button>
      <div></div>
      <div>
        <button>sign up with google</button>
        <button>sign up with apple account</button>
        <button>sign up</button>
        <p>forgot account?</p>
      </div>
    </div>
  );
};

export default login;