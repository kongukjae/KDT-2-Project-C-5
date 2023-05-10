import React from "react";
import { Link } from "react-router-dom";
import './bell.css'

const container={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  height:"15px"
}


const NotificationTab = () => {
  return (
    <div style={container}>
      <Link to="/notificationList">
        <button>
          <div className="gg-bell"></div>
        </button>
      </Link>
    </div>
  );
};

export default NotificationTab;
