import React from "react";
import MainFeedReviewForm from "./mainFeedReviewForm";

const scroll = {
  width: "100%",
  height: "500px",
  maxHeight: "500px",
  overflow: "scroll",
};

//인기 리뷰를 담당하는 컴포넌트
//수정 : 김동주
const PopularReview = () => {
  const data = [
    {
      bookPic: "pic",
      profilePic: "ppp",
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
      likeState: true,
    },
    {
      bookPic: "pic",
      profilePic: "ppp",
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
      likeState: true,
    },
    {
      bookPic: "pic",
      profilePic: "ppp",
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
      likeState: true,
    },
    {
      bookPic: "pic",
      profilePic: "ppp",
      name: "김동주",
      review: "asdasdasdasd",
      time: "1h ago",
      like: "199",
      likeState: true,
    },
  ];
  //TODO progilepic <-> bookReviewFeed link
  //정지은

  return (
    <div style={scroll}>
      {data.map((item, index) => (
        <MainFeedReviewForm
          key={index}
          bookPic={item.bookPic}
          profilePic={item.profilePic}
          name={item.name}
          review={item.review}
          time={item.time}
          like={item.like}
          likeState={item.likeState}
        />
      ))}
      <MainFeedReviewForm
        bookPic={data.bookPic}
        profilePic={data.profilePic}
        name={data.name}
        review={data.review}
        time={data.time}
        like={data.like}
        likeState={data.likeState}
      />
    </div>
  );
};

export default PopularReview;
