import React, {useState} from 'react'

import Profile from '../components/DJ_Profile';
import MypageTopBar from '../components/DJ_MypageTopBar';
import MypageContent from '../components/DJ_MypageContent';
import NavBar from './DJ_NavBar'
//마이페이지를 담당하는 컴포넌트, 네비게이션 바 맨 오른쪽 클릭시 이동됨
//김동주
const mypage=()=>{

  return(
    <div>
      
      <MypageTopBar></MypageTopBar>
      <Profile></Profile>
      <MypageContent></MypageContent>
      <NavBar></NavBar>
    </div>
  );
}

export default mypage;



