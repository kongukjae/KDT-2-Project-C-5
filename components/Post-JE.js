import React from "react";

function Post({ title, content, isEditable, onEdit, onDelete }) {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>
      <p>{content}</p>
      {isEditable && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onEdit} style={{ marginRight: "10px" }}>
            수정
          </button>
          <button onClick={onDelete}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default Post;
