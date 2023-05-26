import React from "react";
import { Link } from "react-router-dom";

const LinkStyle ={
  textDecorationLine: 'none'
}

const NotificationTab = () => {
  return (
    <div >
      <Link style={LinkStyle} to="/NotificationList">
        <div>💭</div>
      </Link>
    </div>
  );
};

export default NotificationTab;
