import React, { useEffect, useState } from 'react';

// 배열의 길이에 따라 컴포넌트가 생성되는 예제 연습을 해보자.
// 실시간, 인기 리뷰 컴포넌트에서 스크롤 시 컴포넌트가 계속 생겨나는 기능에 쓰일 개념이다.



const LovelyMonday = () => {

  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const lastItemRef = useRef(null); // useRef로 ref를 설정합니다.

  useEffect(()=> {
    if (lastItemRef.current) {
      console.log('Last Item:', lastItemRef.current);
    }
  }, [data]);

  return (
    <div>
      
    </div>
  );
};

export default LovelyMonday;