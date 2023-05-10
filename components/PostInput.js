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

  //submit 수정
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, content };
    //fetch를 통해서 "/"에 요청을 보냄
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      //post객체 전달
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
      height: "70px",
      fontSize: "16px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginTop: "10px",
    },
    textarea: {
      width: "290px",
      height: "150px",
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
      <div style={{ height: "80px" }}>
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
