import React from 'react';

const ButtonSubmit = () => {
  const LoginSignUpInputStyle = {
    width: '80%',
    height: '40px',
    backgroundColor: '#D9D9D9',
    border: '1px solid #D9D9D9',
    borderRadius: '20px',
    textAlign: 'center'
  }
  return (
    <div>
      <button type='submit' style={LoginSignUpInputStyle}>submit</button>
    </div>
  );
};

export default ButtonSubmit;