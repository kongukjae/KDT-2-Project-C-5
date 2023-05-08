// 햄버거 메뉴에서 차단 목록 컴포넌트이다.
import React from 'react';
import TopMenu from './TopMenu';
import BlockedList from '../components/BlockedList';

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