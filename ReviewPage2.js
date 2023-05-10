import React, { useState } from "react";
import PostInput from "./components/PostInput";
// import Search from "../components/Search";
import NavBar from "./src/NavBar";
import TopMenu from "./src/TopMenu";

const styles = {
  header: {
    fontSize: "24px",
    marginTop: "10px",
    width: "150px",
    height: "150px",
    backgroundColor: "#DCDCDC",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#696969",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    marginLeft: "10px",
    cursor: "pointer",
  },
  input: {
    width: "200px",
    height: "70x",
    padding: "5px 10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "10px",
  },
};

function ReviewPage2() {
  return (
    <div>
      <TopMenu />
      <form>
        <div style={styles.header}></div>
        <input type="text" placeholder="search for book" style={styles.input} />
        <button type="submit" style={styles.button}>
          검색
        </button>
      </form>
      <NavBar />
    </div>
  );
}

export default ReviewPage2;
