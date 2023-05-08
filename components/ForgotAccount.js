// 로그인 시 사용되는 컴포넌트이다.
import React from 'react';

const forgotSt={
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  color:"D9D9D9",
  fontSize:"7px"
}

const ForgotAccount = () => {
  return (
    <div style={forgotSt}>
      <a href=''>forgot account?</a>
    </div>
  );
};

export default ForgotAccount;