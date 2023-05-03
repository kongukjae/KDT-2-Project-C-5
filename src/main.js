import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/NavBar";
import LoginPage from "./loginPage";
import "./index.css";


const App = () => {
  return (
    <div>
      <LoginPage/>
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
