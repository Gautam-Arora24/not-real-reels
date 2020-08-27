import React from "react";
import "./CSS/VideoHeader.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function VideoHeader() {
  return (
    <div className="videoheader">
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltIcon />
    </div>
  );
}
