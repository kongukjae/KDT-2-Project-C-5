import React, { useState } from "react";

function PostForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: 작성한 글을 저장하는 로직 추가
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>
      <button type="submit">작성 완료</button>
    </form>
  );
}

export default PostForm;
