import React from "react";
import { createRoot } from "react-dom/client";

import NavBar from "../components/NavBar";
import Logo from "./startScreen"

import "./index.css";





const App = () => {
  return (
    
    <Logo></Logo>    

  );
};
createRoot(document.getElementById("root")).render(<App />);
