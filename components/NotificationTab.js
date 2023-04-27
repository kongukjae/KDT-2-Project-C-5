import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LinkIcon = () => {
  return (
    <div>
      <Link to="/">📃</Link>
    </div>
  );
};

const Notification = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LinkIcon />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Notification;
