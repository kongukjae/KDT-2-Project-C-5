import React from "react";

import { createRoot } from "react-dom/client";

import NavBar from "../components/NavBar";
import "./index.css";


const App = () => {
  return (
    
    <NavBar></NavBar>

  );
};
createRoot(document.getElementById("root")).render(<App />);
