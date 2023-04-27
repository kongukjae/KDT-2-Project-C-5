import React, { useState } from 'react';
import ImgUserPicture from './ImgUserPicture'
import UserName from './UserName'
import ButtonCancle from './ButtonCancle';

const ListStyle = {
  width: '357px',
  height: '631px',
  display: 'flex',
  justifyContent: 'space-around'
}

const tapStyle = {
  width: '390px',
  height: '45px',
  display: 'flex',
  justifyContent: 'space-around'
}

const FollowerFollowing = () => {
  // 구독인, 구독자 클릭 시 색상 변경
  const [isHoverd, setIsHovered] = useState(false);

  const handleMouseIn = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const textStyle = {
    color: isHoverd ? 'grey' : 'black'
  }
  // 조건부 렌더링 시도 중
  const [follower, setFollower] = useState(()=>{<ImgUserPicture/>});
  const [following, setFollowing] = useState('');

  const onClickFollower = () => {
    setFollower('follower 목록');
    setFollowing('');
  };

  const onClickFollowing = () => {
    setFollowing('following 목록');
    setFollower('');
  };

  return (
    <div>
      <div style={tapStyle}>
        <div style={textStyle} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} onClick={onClickFollower}><b>구독인</b></div>
        <div onClick={onClickFollowing}><b>구독자</b></div>
      </div>
      <div>
        {follower}
        {following}
      </div>
      <div style={ListStyle}>
        <ImgUserPicture/>
        <UserName/>
        <ButtonCancle/>
      </div>
    </div>
  );
};

export default FollowerFollowing;