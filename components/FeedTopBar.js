import React from "react";
import AlarmPicture from "./AlarmOffPicture";
import userImeage from "../public/img.jpg";

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
      <div>
        <img src={userImeage} alt="img" />
      </div>
      <div>jiny2735</div>
      <div id="subscribe" style={subStyles}>
        구독중
      </div>
      <AlarmPicture />
    </div>
  );
};

export default FeedTopBar;
