import React from "react";
import AlarmPicture from "./AlarmOffPicture";

const Styles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: "50px",
  backgroundColor: "#CDB7B5",
  justifyContent: "center",
};
const subStyles = {
  backgroundColor: "white",
  borderRadius: "10px",
};

const FeedTopBar = () => {
  return (
    <div style={Styles}>
      <div>사진</div>
      <div>이름</div>
      <div id="subscribe" style={subStyles}>
        구독중
      </div>
      <AlarmPicture />
    </div>
  );
};

export default FeedTopBar;
