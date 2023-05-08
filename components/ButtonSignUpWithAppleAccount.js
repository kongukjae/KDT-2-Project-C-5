// 애플계정으로 로그인 버튼 컴포넌트이다.
import React from 'react';


const APLogin={
  border:"none",
  borderRadius:"13px",
  color:"white",
  width:"100%",
  height:"30px",
  backgroundColor:"#D9D9D9",
}
const ButtonSignUpWithAppleAccount = () => {
  return (
    <div>
      <button style={APLogin}>sign up with apple account</button>
    </div>
  );
};

export default ButtonSignUpWithAppleAccount;