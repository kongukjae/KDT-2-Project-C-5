import React from "react";
import {
  getBookReview,
  setBookReview,
  getUserInfo,
  setUserInfo,
} from "../src/Global";
import MainFeedReviewForm from "./mainFeedReviewForm";

const scroll = {
<<<<<<< HEAD
  width: "100%",
  height: "500px",
  maxHeight: "500px",
  overflow: "scroll",
=======
  //width: '100%',
  height: '500px',
  maxHeight: '500px',
  overflow: 'scroll',
>>>>>>> origin/WJKK21/issue89
};

let bookreview = getBookReview();

//인기 리뷰를 담당하는 컴포넌트
//수정 : 김동주
const PopularReview = ({ Handle }) => {
  const data = [
    {
      bookPic: "pic",
      profilePic: "ppp",
<<<<<<< HEAD
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
=======
      name: "jain",
      review: "진짜 중요한 한 가지를 찾을 수 있는 통찰력을 준다",
      time: "2d ago",
      like: "185",
>>>>>>> origin/WJKK21/issue89
      likeState: true,
    },
    {
      bookPic: "pic",
      profilePic: "ppp",
<<<<<<< HEAD
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
=======
      name: "DITA",
      review: "'왜 내 인생은 이모양이지? 생각하는 사람에게 힘이 되어줄 책",
      time: "23h ago",
      like: "152",
>>>>>>> origin/WJKK21/issue89
      likeState: true,
    },
    {
      bookPic: "pic",
      profilePic: "ppp",
<<<<<<< HEAD
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
=======
      name: "dino",
      review: "죽음 앞에서도 허무함에 빠지지 않으려면",
      time: "14h ago",
      like: "148",
>>>>>>> origin/WJKK21/issue89
      likeState: true,
    },
    {
      bookPic: "pic",
      profilePic: "ppp",
<<<<<<< HEAD
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
=======
      name: "쥬씨",
      review: "SF는 최고야",
      time: "20h ago",
      like: "41",
>>>>>>> origin/WJKK21/issue89
      likeState: true,
    },
  ];

  return (
    <div>
      <div style={scroll}>
        {bookreview.map((item, index) => (
          <MainFeedReviewForm
            key={index}
            bookPic={item["bookcover"]}
            profilePic={item["profilePic"]}
            name={item["booktitle"]}
            review={item["summery"]}
            time={item["modifiedtime"]}
            like={item["likecount"]}
            likeState={false}
            handle={Handle}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularReview;
