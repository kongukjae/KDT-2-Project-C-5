import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Test = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Test;
