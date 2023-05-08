import React from 'react';
import TopMenu from './DJ_TopMenu';
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