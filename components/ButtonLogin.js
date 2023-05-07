import React from 'react';

const login={
  display:"flex",
  border:"none",
  borderRadius:"5px",
  color:"white",
  width:"100px",
  backgroundColor:"#D9D9D9",

}

const container={
  display:"flex",
  alignContent:"center"
}

const ButtonLogin = () => {
  return (
    <div style={container}>
      <button style={login} type='submit'>login</button>
    </div>
  );
};

export default ButtonLogin;