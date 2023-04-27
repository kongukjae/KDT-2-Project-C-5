import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import Counter from '../components/mypage-component/Counter';
import MyStories from '../components/mypage-component/MyStories';
import ProfilePicture from '../components/mypage-component/ProfilePicture';
import ProfileStatus from '../components/mypage-component/ProfileStatus';
import MyPosts from '../components/mypage-component/MyPosts';
import ProfileSettings from '../components/mypage-component/ProfileSettings';
import ProfileName from '../components/mypage-component/ProfileName';
import MyLibrary from '././mylibrary';


function MyPage() {
  return (
    <div>
      <BookStagramTopLogo/>
        <ProfilePicture/>
        <ProfileStatus/>
        <ProfileName/>

        <Counter />

        <MyPosts/>
        <ProfileSettings />
        <MyStories/>
        <li>
        <Link to="/mylibrary">mylibrary</Link>
        </li>


    </div>
  );
}
const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/mylibrary" element={<MyLibrary />} />
        </Routes>
    </div>
    
  );
};
export default MyPage;