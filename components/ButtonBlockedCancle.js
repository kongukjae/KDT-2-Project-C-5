import React, { useState } from 'react';

const ButtonBlockedCancle = () => {

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
    fontSize: '12px'
  }

  return (
    <div>
      <button style={cancleStyle} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>차단해제</button>
    </div>
  );
};

export default ButtonBlockedCancle;