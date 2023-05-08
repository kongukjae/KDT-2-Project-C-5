// 로그인 버튼 컴포넌트이다.
import React from 'react';

const login={
  border:"none",
  borderRadius:"13px",
  color:"white",
  width:"50%",
  height:"30px",
  backgroundColor:"#D9D9D9",
}

const container={
  display:"flex",
  justifyContent:"center"
}

const ButtonLogin = () => {
  return (
    <div style={container}>
      <button style={login} type='submit'>login</button>
    </div>
  );
};

export default ButtonLogin;