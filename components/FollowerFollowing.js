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

  const [follower, setFollower] = useState('');
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
        <div onClick={onClickFollower}><b>구독인</b></div>
        <div onClick={onClickFollowing}><b>구독자</b></div>
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