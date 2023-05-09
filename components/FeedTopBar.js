import React from "react";
import AlarmPicture from "./AlarmOffPicture";
import userImage from "../src/img/goose.jpg";

const Styles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: "50px",
  backgroundColor: "#CDB7B5",
  justifyContent: "space-between",
};
const subStyles = {
  backgroundColor: "white",
  borderRadius: "10px",
};
const imageStyles = {
  width: "40px",
  height: "40px",
  objectFit: "cover",
  borderRadius: "100%",
  border: "1px solid black",
};

const FeedTopBar = () => {
  return (
    <div style={Styles}>
      <div>
        <img src={userImage} alt="img" style={imageStyles} />
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
