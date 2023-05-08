// 햄버거 메뉴에서 계정설정을 하는 컴포넌트이다.
import React from 'react';
import TopMenu from './JK-TopMenu';
import InputEmail from '../components/JK-InputEmail.js';
import InputPwdCheck from '../components/JK-InputPwdCheck';
import ButtonSubmit from '../components/JK-ButtonSubmit';

const submitStyle = {
  width: '100px'
}

const AccountSetting = () => {
  return (
    <div>
      <header><TopMenu/></header>
      <main>
        <InputEmail/>
        <InputPwdCheck/>
        <div style={submitStyle}><ButtonSubmit/></div>
      </main>
    </div>
  );
};

export default AccountSetting;