import React from 'react';

const InputProfilePic = () => {
  const LoginSignUpInputStyle = {
    width: '50%',
    height: '120px',
    backgroundColor: '#D9D9D9',
    border: '1px solid #D9D9D9',
    borderRadius: '50%',
    textAlign: 'center',
  }

  const ProfilePicStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={ProfilePicStyle}>
          {/* form이 서버에 제출될 때 'name'속성 값은 해당 입력 필드의 값을 나타내는 키(key) 역할을 한다. 입력된 값은 이 키(key)와 함께 서버로 전송된다.*/}
          <div><input type="file" name='profile' style={LoginSignUpInputStyle}></input></div>
    </div>
  );
};

export default InputProfilePic;