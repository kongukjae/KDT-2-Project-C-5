import React, { useState } from "react";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import NavBar from "../src/NavBar";
import Post from "../components/Post";
import TopMenu from "./TopMenu";

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
    <div>
      <TopMenu />
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Search />
        <PostInput onSave={handleSave} />
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default ReviewPage;
