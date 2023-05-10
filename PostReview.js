import React, { useState } from "react";

function PostReview() {
  //formData 초기화
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    summery: "",
    reivew: "",
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
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("서버 에러");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("에러입니다.", error);
      });
    setFormData({ title: "", img: "", summery: "", reivew: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        책 제목:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="img">
        책 이미지:
        <input
          type="file"
          name="img"
          value={formData.img}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="summery">
        요약 리뷰:
        <input
          type="text"
          name="summery"
          value={formData.summery}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="reivew">
        긴글 리뷰:
        <input
          type="text"
          name="reivew"
          value={formData.reivew}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostReview;
