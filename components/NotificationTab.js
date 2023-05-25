import React from "react";
import { Link } from "react-router-dom";

const NotificationListstyle ={
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  width:"100%"

}

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
