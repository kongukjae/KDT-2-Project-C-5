import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount';
import ButtonSignUp from '../components/ButtonSignUp';
import ForgotAccount from '../components/ForgotAccount';

const loginPage = () => {
  function handleSubmit(event) {
    //새창을 여는 기본 설정을 방지하는 구문.
    event.preventDefault();

    //받은 이벤트의 타겟, submit된 데이터(id, password)를 form으로 저장하는 구문
    const form = event.target;
    //해당 타겟을 FormData 형식으로 변환, 저장하는 구문.
    const formData = new FormData(form);
    //fetch로 서버에 데이터를 보내는 구문.
    fetch("/login", {method: form.method, body: formData})
}
  return (
    <div>
      <BookStagramTopLogo/>
      <div>
        <form onSubmit={handleSubmit}>
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