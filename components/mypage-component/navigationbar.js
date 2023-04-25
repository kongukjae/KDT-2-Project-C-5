//네비게이션 바 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/my-posts">My Posts</Link>
      <Link to="/my-stories">My Stories</Link>
      <Link to="/profile-settings">Profile Settings</Link>
    </div>
  );
};

export default NavigationBar;
