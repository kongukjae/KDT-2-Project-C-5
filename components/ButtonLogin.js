import React from 'react';

const login={
  border:"none",
  borderRadius:"5px",
  color:"white",
  width:"100px"
}


const ButtonLogin = () => {
  return (
    <div>
      <button style={login} type='submit'>login</button>
    </div>
  );
};

export default ButtonLogin;