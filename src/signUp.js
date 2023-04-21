import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import InputId from '../components/InputId';
import InputPwd from '../components/InputPwd';
import ButtonSubmit from '../components/ButtonSubmit';
import InputEmail from '../components/InputEmail';
import InputUserName from '../components/InputUserName';
import InputProfilePic from '../components/InputProfilePic';

const signUp = () => {
  return (
    <div>
      <BookStagramTopLogo/>
      <InputProfilePic/>
      <InputId/>
      <InputEmail/>
      <InputUserName/>
      <InputPwd/>
      <div>pwd check 입력 란</div>
      <ButtonSubmit/>
    </div>
  );
};

export default signUp;