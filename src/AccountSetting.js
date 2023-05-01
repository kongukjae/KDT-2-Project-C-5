import React from 'react';
import TopMenu from './TopMenu';
import InputEmail from '../components/InputEmail';
import InputPwdCheck from '../components/InputPwdCheck';
import ButtonSubmit from '../components/ButtonSubmit';



const AccountSetting = () => {
  return (
    <div>
      <header><TopMenu/></header>
      <main>
        <InputEmail/>
        <InputPwdCheck/>
        <ButtonSubmit/>
      </main>
    </div>
  );
};

export default AccountSetting;