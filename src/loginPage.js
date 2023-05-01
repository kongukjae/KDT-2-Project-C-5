import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo.js';
import InputId from '../components/InputId.js';
import InputPwd from '../components/InputPwd.js';
import ButtonLogin from '../components/ButtonLogin.js';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle.js';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount.js';
import ButtonSignUp from '../components/ButtonSignUp.js';
import ForgotAccount from '../components/ForgotAccount.js';

const loginPage = () => {
  return (
    <div>
      <BookStagramTopLogo/>
      <div>
        <form>
          <InputId/>
          <p><b>password</b></p>
          <InputPwd/>
        </form>
      </div>
      <ButtonLogin/>
      
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