// 햄버거메뉴 관심 친구 컴폰넌트이다.
import React, { useState } from 'react';
import TopMenu from './JK-TopMenu';
import FollowerList from '../components/JK-FollowerList';
import FollowingList from '../components/JK-FollowingList';

const tapStyle = {
  width: '390px',
  height: '45px',
  display: 'flex',
  justifyContent: 'space-around',
}

const FollowerFollowing = () => {
  // 구독인, 구독자 클릭 시 색상 변경
  const [selectedTab, setSelectedTab] = useState('follower');
  // 마우스 클릭 시 grey
  const handleMouseClick = (tab) => {
    setSelectedTab(tab);
  }

  const textStyle = (tab) => {
    return {
      color: selectedTab === tab ? 'grey' : 'black',
      cursor: 'pointer'
    }
  }

  // 구독인, 구독자 list 상태를 변경하기 위한 구문
  const [follower, setFollower] = useState(()=> <FollowerList/>);
  const [following, setFollowing] = useState(null);
  // 구독인 누를 시 구독인 리스트 나오게 하고, 구독자 리스트는 없애기
  const onClickFollower = () => {
    setFollower(<FollowerList/>);
    setFollowing(null);
    handleMouseClick('follower');
  };
  // 구독자 누를 시 구독자 리스트 나오게 하고, 구독인 리스트는 없애기
  const onClickFollowing = () => {
    setFollowing(<FollowingList/>);
    setFollower(null);
    handleMouseClick('following');
  };

  return (
    <div>
      <header><TopMenu/></header>
      <div style={tapStyle}>
        <div style={textStyle('follower')} onClick={onClickFollower}><b>구독인</b></div>
        <div style={textStyle('following')} onClick={onClickFollowing}><b>구독자</b></div>
      </div>
      <div>
        {follower}
        {following}
      </div>
    </div>
  );
};

export default FollowerFollowing;
