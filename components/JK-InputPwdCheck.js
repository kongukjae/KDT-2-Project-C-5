// Pwd 확인 컴포넌트이다.
import React, { useState } from 'react';
// 비밀번호 확인을 위해 비밀번호 입력 컴포넌트를 import
import InputPwd from './JK-InputPwd';
const InputPwdCheck = () => {
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };
// 밑의 제출버튼은 ButtonSubmit 으로 컴포넌트화 시키면 적용이 불가하므로 생각이 필요해 보임.
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   // 회원가입 처리 로직 작성 부분
// }
  return (
    <div>
      <p><b>password</b></p>
      <InputPwd value={password} onChange={handlePasswordChange} />
      <p><b>password check</b></p>
      <InputPwd value={passwordCheck} onChange={handlePasswordCheckChange} />
    </div>
  );
};
export default InputPwdCheck;