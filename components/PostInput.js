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
    onSave(post, false); // isEditing = false
    setTitle("");
    setContent("");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
    },
    input: {
      width: "290px",
      height: "100px",
      fontSize: "16px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginTop: "10px",
    },
    textarea: {
      width: "290px",
      height: "200px",
      fontSize: "16px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginTop: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#696969",
      color: "#fff",
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      marginTop: "10px",
      cursor: "pointer",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <div>
        <label htmlFor="title">
          <br />
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          style={styles.input}
          placeholder="간단한 리뷰를 작성해주세요"
        />
      </div>
      <div>
        <label htmlFor="content">
          <br />
        </label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          style={styles.textarea}
          placeholder="리뷰를 작성해주세요"
        ></textarea>
      </div>
      <button type="submit" style={styles.button}>
        등록
      </button>
    </form>
  );
}

export default PostInput;
