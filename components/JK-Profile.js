import React, {useState} from 'react';

import Introduce from "./JK-Introduce";
import ProfileName from './JK-ProfileName';

//마이페이지에 사용되는 프로필 컴포넌트
//김동주
const profile=()=>{
  

  return(
    <div>
      <Introduce></Introduce>
      <ProfileName name="제인"></ProfileName>
      
    </div>
  )

}

export default profile;