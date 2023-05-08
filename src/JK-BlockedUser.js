// 햄버거 메뉴에서 차단 목록 컴포넌트이다.
import React from 'react';
import TopMenu from './JK-TopMenu';
import BlockedList from '../components/JK-BlockedList';

const conStyle = {
  height: '631px'
}


const BlockedUser = () => {
  return (
    <div style={conStyle}>
      <header><TopMenu/></header>
      <div><BlockedList/></div>
    </div>
  );
};

export default BlockedUser;