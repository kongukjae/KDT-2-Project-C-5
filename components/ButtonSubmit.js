import React, { useState } from 'react';

const ButtonSubmit = () => {
  // button hover 설정을 위한 useState 사용
  const [isHovered, setIsHovered] = useState(false);
  // backgroundColor에 삼항연산자를 이용하기 위해 true, flase 설정
  const handleMouseIn = () => {
    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }

  const LoginSignUpInputStyle = {
    width: '80%',
    height: '40px',
    // true 시 앞에 값 flase 시 뒤에 값 적용
    backgroundColor: isHovered ? 'rgb(143, 143, 143)':'#D9D9D9',
    border: '1px solid #D9D9D9',
    borderRadius: '20px',
    textAlign: 'center'
  }
  return (
    <div>
      {/* :active 기능은 업데이트 예정 */}
      <button className='myBtn' type='submit' style={LoginSignUpInputStyle} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>submit</button>
    </div>
  );
};

export default ButtonSubmit;