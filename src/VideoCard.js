import React, { useState, useRef } from "react";
import "./CSS/VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

export default function VideoCard({ likes, shares, song, channel, src }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const videoref = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoref.current.pause();
      setisVideoPlaying(false);
    } else {
      videoref.current.play();
      setisVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        className="video_player"
        src={src}
        onClick={onVideoPress}
        ref={videoref}
      />
      <VideoFooter
        likes={likes}
        shares={shares}
        song={song}
        channel={channel}
      />
    </div>
  );
}
