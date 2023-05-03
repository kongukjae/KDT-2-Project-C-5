import React from "react";

import { createRoot } from "react-dom/client";
import SignUp from "./signUp"
//import LoginPage from "./loginPage"
//import NavBar from "../components/NavBar";
import "./index.css";


const App = () => {
  return (
    <SignUp />
  );
};
createRoot(document.getElementById("root")).render(<App />);
