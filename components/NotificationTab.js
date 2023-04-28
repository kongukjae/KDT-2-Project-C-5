import { Link } from "react-router-dom";
import React from "react";
// import NoticePage from "./NoticePage";

function NotificationTab() {
  return (
    <div>
      <Link to="/NoticePage">
        <button>📃</button>
      </Link>
    </div>
  );
}

export default NotificationTab;
