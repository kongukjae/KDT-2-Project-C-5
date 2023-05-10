import React from 'react';
import {
  getBookReview,
  setBookReview,
  getUserInfo,
  setUserInfo,
} from '../src/Global';
import MainFeedReviewForm from './mainFeedReviewForm';

const scroll = {
  width: '100%',
  height: '500px',
  maxHeight: '500px',
  overflow: 'scroll',
};

let bookreview = getBookReview();

//인기 리뷰를 담당하는 컴포넌트
//수정 : 김동주
const PopularReview = () => {
  const data = [
    {
      bookPic: 'pic',
      profilePic: 'ppp',
      name: '김동주',
      review: 'asdasdasdasd',
      time: '1h ago',
      like: '199',
      likeState: true,
    },
    {
      bookPic: 'pic',
      profilePic: 'ppp',
      name: '김동주',
      review: 'asdasdasdasd',
      time: '1h ago',
      like: '199',
      likeState: true,
    },
    {
      bookPic: 'pic',
      profilePic: 'ppp',
      name: '김동주',
      review: 'asdasdasdasd',
      time: '1h ago',
      like: '199',
      likeState: true,
    },
    {
      bookPic: 'pic',
      profilePic: 'ppp',
      name: '김동주',
      review: 'asdasdasdasd',
      time: '1h ago',
      like: '199',
      likeState: true,
    },
  ];

  return (
    <div style={scroll}>
      {bookreview.map((item, index) => (
        <MainFeedReviewForm
          key={index}
          bookPic={item['bookcover']}
          profilePic={item['profilePic']}
          name={item['username']}
          review={item['body']}
          time={item['modifiedtime']}
          like={item['likecount']}
          likeState={false}
        />
      ))}
    </div>
  );
};

export default PopularReview;
