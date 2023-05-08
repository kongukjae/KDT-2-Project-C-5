// 차단 목록 컴포넌트에 사용되는 차단해제 버튼 컴포넌트이다.
import React, { useState } from 'react';

const ButtonBlockedCancle = () => {
  // 마우스 호버 시 버튼에 효과 적용
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
    // 삼항연산자를 이용하여 효과 표현
    backgroundColor: isHoverd ? 'grey':'black',
    color: 'white',
    fontSize: '12px'
  }

  return (
    <div>
      <button style={cancleStyle} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>차단해제</button>
    </div>
  );
};

export default ButtonBlockedCancle;