import React, {useState} from 'react';

import Introduce from "./Introduce";
import ProfileName from './ProfileName';

//마이페이지에 사용되는 프로필 컴포넌트
const profile=()=>{
  

  return(
    <div>
      <Introduce></Introduce>
      <ProfileName name="제인"></ProfileName>
      
    </div>
  )

}

export default profile;