// ! input 컴포넌트 조립 시 <form></form> 안에 넣어주는 거 잊지말자!
import React from 'react';

const InputId = () => {
  return (
    <div>
      <p><b>ID</b></p>
          {/* form이 서버에 제출될 때 'name'속성 값은 해당 입력 필드의 값을 나타내는 키(key) 역할을 한다. 입력된 값은 이 키(key)와 함께 서버로 전송된다.*/}
          <div><input type="text" placeholder='ID를 입력하세요' name='id' style={inputStyle}></input></div>
    </div>
  );
};

export default InputId;