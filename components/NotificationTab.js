import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NoticePage from "./NoticePage";

//내가 이동할 페이지
const NoticePage = () => {
  return (
    <div>
      <div>알림창페이지</div>
    </div>
  );
};

const Notification = () => {
  return (
    <div>
      <Link to="/Noticepage">📃</Link>
    </div>
  );
};

export default Notification;
