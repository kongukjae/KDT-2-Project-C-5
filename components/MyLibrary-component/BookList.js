/* 읽은 책
지금까지 읽은 모든 책의 정보를 표시하는 컴포넌트입니다.
책 정보를 표시하는 방식은 책 컴포넌트와 유사합니다.
읽은 책 목록은 별도의 데이터베이스나 API에서 가져올 수 있으며, 해당 데이터를 props로 전달받아 렌더링합니다.
 */

import React from 'react';

function BookList(props) {
  return (
    <div>
      <h2>읽은 책</h2>
      <ul>

      </ul>
    </div>
  );
}

export default BookList;

