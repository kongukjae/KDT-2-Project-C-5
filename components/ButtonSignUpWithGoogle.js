// 구글로 회원가입 버튼 컴포넌트이다.
import React from 'react';

const GGLogin={
  border:"none",
  borderRadius:"13px",
  color:"white",
  width:"100%",
  height:"30px",
  backgroundColor:"#D9D9D9",
}

const ButtonSignUpWithGoogle = () => {
  return (
    <div>
      <button style={GGLogin}>sign up with google</button>
    </div>
  );
};

export default ButtonSignUpWithGoogle;