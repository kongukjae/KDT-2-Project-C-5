import React, { useState } from "react";
import PostInput from "./components/PostInput";
// import Search from "../components/Search";
import NavBar from "./src/NavBar";
import TopMenu from "./src/TopMenu";
const styles = {
  fontSize: "24px",
  marginTop: "10px",
  width: "150px",
  height: "150px",
  backgroundColor: "#DCDCDC",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function ReviewPage2() {
  return (
    <div>
      <TopMenu />
      <form>
        <div style={styles}></div>
        <input />
        <button type="submit" style={styles.button}>
          검색
        </button>
      </form>
      <NavBar />
    </div>
  );
}

export default ReviewPage2;
