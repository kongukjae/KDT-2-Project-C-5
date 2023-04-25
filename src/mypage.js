import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import Counter from '../components/mypage-component/Counter';
import MyStories from '../components/mypage-component/MyStories';
import ProfilePicture from '../components/mypage-component/ProfilePicture';
import ProfileStatus from '../components/mypage-component/ProfileStatus';

function MyPage() {
  return (
    <div>
      <BookStagramTopLogo/>
        <>
        
        <ProfilePicture/>
        <ProfileStatus/>
        <Counter />

        </>
        <MyStories/>
        
    </div>
  );
}

export default MyPage;