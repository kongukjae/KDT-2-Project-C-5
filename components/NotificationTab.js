import React from "react";
import { Link } from "react-router-dom";

const NotificationTab = () => {
  return (
    <div>
      <Link to="/NotificationList">
        <button>💭</button>
      </Link>
    </div>
  );
};

export default NotificationTab;
