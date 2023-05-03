import React from "react";

import { createRoot } from "react-dom/client";
import LoginPage from "./loginPage";
import NavBar from "../components/NavBar";
import "./index.css";


const App = () => {
  return (
    <div>
      <LoginPage/>
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
