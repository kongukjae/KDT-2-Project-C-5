import React, { useState } from "react";

function PostInput({ onSave }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, content };
    onSave(post);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          3줄리뷰
          <br />
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">
          긴글리뷰
          <br />
        </label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>
      <button type="submit">등록</button>
    </form>
  );
}

export default PostInput;
