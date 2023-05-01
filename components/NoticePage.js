import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className=" App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default APP;
