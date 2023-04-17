import React from 'react';

const login = () => {
  return (
    <div id='login-page'>
      <div>BOOK STAGRAM</div>
      <div>
        <form>
          <p>ID</p>
          <input type="text" placeholder='ID를 입력하세요' name='id'></input>
          <p>password</p>
          <input type="password" placeholder='password를 입력하세요' name='password'></input>
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