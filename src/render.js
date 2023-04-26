import ReactDOM from "react-dom/client";
import React from "react";
import App from "./app.js";

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);