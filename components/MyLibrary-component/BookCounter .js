/* 책 카운터
현재까지 읽은 책의 수를 표시하는 컴포넌트입니다.
 */
import React from 'react';

function BookCounter(props) {
  return (
    <div>
      <p>Number of books read: {props.count}</p>
    </div>
  );
}

export default BookCounter;
