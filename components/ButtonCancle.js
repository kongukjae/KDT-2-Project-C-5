// 취소 버튼 컴포넌트이다.
import React, { useState } from 'react';
const ButtonCancle = () => {
  // 마우스 오버 시 효과 적용
  const [isHoverd, setIsHovered] = useState(false);
  const handleMouseIn = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const cancleStyle = {
    width: '67px',
    height: '35px',
    borderRadius: '20px',
    // 삼항연산자를 이용하여 효과를 적용
    backgroundColor: isHoverd ? 'grey':'black',
    color: 'white',
    fontSize: '20px'
  }
  return (
    <div>
      <button style={cancleStyle} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>취소</button>
    </div>
  );
};
export default ButtonCancle;