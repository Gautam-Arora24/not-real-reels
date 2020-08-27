import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./CSS/VideoFooter.css";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

export default function VideoFooter({ channel, like, share, song }) {
  return (
    <div className="videofooter">
      <div className="videofooter-text">
        {/* <Avatar src={avatar} alt="" /> */}
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
      <div className="videofooter_ticker">
        <MusicNoteIcon className="videofooter-icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}
