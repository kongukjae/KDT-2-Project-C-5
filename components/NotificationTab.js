import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <div>📃</div>
    </div>
  );
};

const Notification = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Notification;
