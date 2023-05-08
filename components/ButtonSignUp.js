// 회원가입 버튼 컴포넌트이다.
import React from 'react';

const signUpBtn={
  border:"none",
  borderRadius:"13px",
  color:"white",
  width:"100%",
  height:"30px",
  backgroundColor:"#D9D9D9",
}

const ButtonSignUp = () => {
  return (
    <div>
      <button style={signUpBtn}>sign up</button>
    </div>
  );
};

export default ButtonSignUp;