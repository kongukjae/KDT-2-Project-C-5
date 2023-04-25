// 나의 글을 보여주는 컴포넌트
import React from 'react';

const MyPosts = () => {
  // 데이터베이스에서 현재 사용자가 작성한 글 목록을 가져와서 posts에 할당합니다.
  const posts = [
    {
      id: 1,
      title: '첫 번째 글',
      content: '첫 번째 글 내용입니다.',
      createdAt: '2022-04-28',
    },
    {
      id: 2,
      title: '두 번째 글',
      content: '두 번째 글 내용입니다.',
      createdAt: '2022-04-29',
    },
    {
      id: 3,
      title: '세 번째 글',
      content: '세 번째 글 내용입니다.',
      createdAt: '2022-05-01',
    },
  ];
}

export default MyPosts;
