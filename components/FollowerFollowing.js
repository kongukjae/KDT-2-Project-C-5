import React, { useState } from 'react';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList';

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
  const [follower, setFollower] = useState(()=> <FollowerList/>);
  const [following, setFollowing] = useState(null);

  const onClickFollower = () => {
    setFollower(<FollowerList/>);
    setFollowing('');
  };

  const onClickFollowing = () => {
    setFollowing(<FollowingList/>);
    setFollower('');
  };
  const handleClickFollower = () => {
    setIsHovered(true);
    onClickFollower();
  }
  const handleClickFollowing = () => {
    setIsHovered(true);
    onClickFollower();
  }
  return (
    <div>
      <div style={tapStyle}>
        <div style={textStyle} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} onClick={handleClickFollower}><b>구독인</b></div>
        <div onClick={onClickFollowing}><b>구독자</b></div>
      </div>
      <div>
        {follower}
        {following}
      </div>
    </div>
  );
};

export default FollowerFollowing;