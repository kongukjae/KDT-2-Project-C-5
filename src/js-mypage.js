import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import Counter from '../components/mypage-component/Counter';
import MyStories from '../components/mypage-component/MyStories';
import ProfilePicture from '../components/mypage-component/ProfilePicture';
import ProfileStatus from '../components/mypage-component/ProfileStatus';
import MyPosts from '../components/mypage-component/MyPosts';
import ProfileSettings from '../components/mypage-component/ProfileSettings';
import ProfileName from '../components/mypage-component/ProfileName';
import MyLibrary from './js-MyLibrary';


function MyPage() {
  return (
    <div>
        <ProfilePicture/>
        <ProfileStatus/>
        <ProfileName/>

        <Counter />

        <MyPosts/>
        <ProfileSettings />
        <MyStories/>
        <li>
          <Link to="/js-MyLibrary">내서재</Link>
        </li>

    </div>
  );
}

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/js-MyLibrary" element={<js-MyLibrary/>} />
        </Routes>
        <div>
          <NavBar />
        </div>
      </Router>
    </div>
  );
};


export default MyPage;