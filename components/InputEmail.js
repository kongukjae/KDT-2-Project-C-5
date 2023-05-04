import React from 'react';
const InputEmail = () => {
  const LoginSignUpInputStyle = {
    width: '100%',
    height: '54px',
    backgroundColor: '#D9D9D9',
    border: '1px solid #D9D9D9',
    borderRadius: '20px',
    textAlign: 'center'
  }
  return (
    <div>
      <p><b>e-mail</b></p>
          {/* form이 서버에 제출될 때 'name'속성 값은 해당 입력 필드의 값을 나타내는 키(key) 역할을 한다. 입력된 값은 이 키(key)와 함께 서버로 전송된다.*/}
          <div><input type="email" placeholder='email을 입력하세요' name='email' style={LoginSignUpInputStyle}></input></div>
    </div>
  );
};
export default InputEmail;