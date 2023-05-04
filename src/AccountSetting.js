import React from 'react';
<<<<<<< HEAD
import TopMenu from './TopMenu';
import InputEmail from '../components/InputEmail.js';
=======
import TopMenu from '../components/TopMenu';
import InputEmail from '../components/InputEmail';
>>>>>>> nowkwon97/issuetest
import InputPwdCheck from '../components/InputPwdCheck';
import ButtonSubmit from '../components/ButtonSubmit';

const submitStyle = {
  width: '100px'
}

const AccountSetting = () => {
  return (
    <div>
      {/* <header><TopMenu/></header> */}
      <main>
        <InputEmail/>
        <InputPwdCheck/>
        <div style={submitStyle}><ButtonSubmit/></div>
      </main>
    </div>
  );
};

export default AccountSetting;