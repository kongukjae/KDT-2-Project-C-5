import React, { useState } from 'react';

const ButtonCancle = () => {

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