/* 책 카운터
현재까지 읽은 책의 수를 표시하는 컴포넌트입니다.
 */
import React from 'react';
import Book from './Book';

function BookCounter() {
  return (
    <div>
      <p>읽은 책수 {} </p>
    </div>
  );
}

export default BookCounter;
