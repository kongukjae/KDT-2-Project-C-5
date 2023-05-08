// 햄버거 메뉴에서 계정설정을 하는 컴포넌트이다.
import React from 'react';
import TopMenu from './TopMenu';
import InputEmail from '../components/InputEmail.js';
import InputPwdCheck from '../components/InputPwdCheck';
import ButtonSubmit from '../components/ButtonSubmit';

const submitStyle = {
  width: '100px'
}


//햄버거 메뉴 계정 설정 페이지 컴포넌트
//이재권
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