// 북스타그램 로고 컴포넌트이다.
import React from 'react';

const BookStagramTopLogo = () => {
  const LogoStyle = {
    fontSize: '30px',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px'
  }
  return (
    <div style={LogoStyle}>
      BOOK STAGRAM
    </div>
  );
};

export default BookStagramTopLogo;