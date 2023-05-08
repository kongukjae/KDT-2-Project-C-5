import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import Post from "../components/Post";

function ReviewPage() {
  const [posts, setPosts] = useState([]);

  const handleSave = (post, isEditing) => {
    if (isEditing) {
      const updatedPosts = posts.map((p) => {
        if (p.id === post.id) {
          return post;
        }
        return p;
      });
      setPosts(updatedPosts);
    } else {
      setPosts([...posts, post]);
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Search />
      <PostInput onSave={handleSave} />
    </div>
  );
}

export default ReviewPage;
