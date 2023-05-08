//글을 작성한 시간을 알려주는 컴포넌트
//글 생성 기능 구현이 안됐으므로 현재 시간을 보여줌
import React, { useState, useEffect } from "react";
// 현재 시간을 저장할 상태값(time)을 useState hook으로 정의
function UploadTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // 1초마다 현재 시간을 갱신하여 상태값(time)을 업데이트
    // 컴포넌트가 unmount될 때 타이머를 정리하기 위한 cleanup 함수를 반환
    return function cleanup() {
      clearInterval(timerID); // setInterval 함수에 의해 생성된 타이머를 clear하여 메모리 누수 방지
    };
  }, []); // useEffect hook에서 두번째 매개변수로 빈 배열([])을 전달하면, componentDidMount와 동일한 효과가 있어서 처음 한번만 실행됨.

  return (
    <div>
      <h1>{time.toLocaleTimeString()}전</h1>{" "}
      {/* 시간 정보를 문자열로 변환하여 출력 */}
    </div>
  );
}
export default UploadTime;
