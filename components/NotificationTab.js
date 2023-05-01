import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NoticePage from "./NoticePage";
import TopMenu from "../src/TopMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopMenu />} />
        <Route path="/NoticePage" element={<NoticePage />} />
      </Routes>
    </Router>
  );
}

export default App;
