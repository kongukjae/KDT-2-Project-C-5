import React, { useState } from 'react';
import {
  getUserInfo,
  setUserInfo,
  getBookReview,
  setBookReview,
} from './Global';

function PostReview() {
  const bookReview = getBookReview();

  /**
   * 예제 
   * {
        "index": 1,
        "userid": "dgchoi3904",
        "username": "대건씌",
        "userpic": null,
        "booktitle": "개리포터와 개법사의 뼈",
        "bookcover": null,
        "isbn": null,
        "createdtime": "2023-05-04T06:40:54.000Z",
        "modifiedtime": "2023-05-10T01:25:24.000Z",
        "summery": "짧은 리뷰 내용",
        "body": "리뷰 내용",
        "tag": "#없어!",
        "viewcount": 0,
        "likecount": 0
      }
   */

  //formData 초기화
  const reviewForm = {
    index: 0,
    userid: '',
    username: '',
    userpic: null,
    booktitle: '',
    bookcover: null,
    isbn: null,
    createdtime: '',
    modifiedtime: '',
    summery: '짧은 리뷰 내용',
    body: '리뷰 내용',
    tag: '',
    viewcount: 0,
    likecount: 0,
  };

  const [formData, setFormData] = useState({
    title: '',
    img: '',
    summery: '',
    reivew: '',
  });

  //input value가 변경될 때 호출되는 이벤트 핸들러
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //from 제출 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, img, summery, reivew } = formData;
    const data = { title, img, summery, reivew };
    console.log(data);
    reviewForm.booktitle = data.title;
    reviewForm.bookcover = URL.createObjectURL(data.img);
    reviewForm.summery = data.summery;
    reviewForm.body = data.review;
    console.log(reviewForm);
    // fetch('/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('서버 에러');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error('에러입니다.', error);
    //   });
    //setFormData({ title: '', img: '', summery: '', reivew: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>
        책 제목:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor='img'>
        책 이미지:
        <input
          type='file'
          name='img'
          value={formData.img}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor='summery'>
        요약 리뷰:
        <input
          type='text'
          name='summery'
          value={formData.summery}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor='reivew'>
        긴글 리뷰:
        <input
          type='text'
          name='reivew'
          value={formData.reivew}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default PostReview;
