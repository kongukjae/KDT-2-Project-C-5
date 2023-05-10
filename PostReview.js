import React, { useState } from "react";

function PostReview() {
  //formData 초기화
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { input1, input2, input3, input4 } = formData;
    const data = { input1, input2, input3, input4 };
    console.log(data);
    fetch("/addreview", {
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
    setFormData({ input1: "", input2: "", input3: "", input4: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input1">
        책 제목:
        <input
          type="text"
          id="input1"
          name="input1"
          value={formData.input1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="input2">
        책 이미지:
        <input
          type="file"
          id="input2"
          name="input2"
          value={formData.input2}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="input3">
        요약 리뷰:
        <input
          type="text"
          id="input3"
          name="input3"
          value={formData.input3}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="input4">
        긴글 리뷰:
        <input
          type="text"
          id="input4"
          name="input4"
          value={formData.input4}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostReview;
