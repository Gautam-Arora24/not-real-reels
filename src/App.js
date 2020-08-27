import React, { useState, useEffect } from "react";
import logo from "./images/instaLogo.png";
import "./App.css";
import VideoCard from "./VideoCard";
import Avatar from "@material-ui/core/Avatar";
import db from "../src/firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <h1>Hey, I am building this IG Clone</h1>
      {/* SECTION FOR INSTAGRAM LOGO AND TEXT */}
      <div className="app_top">
        <img className="app_logo" src={logo} />
        <h1>Reels</h1>
      </div>

      {/* SECTION FOR REELS VIDEOS */}
      <div className="app_videos">
        {reels.map(({ channel, song, src }) => (
          <VideoCard
            channel={channel}
            src={src}
            song={song}
            // avatar={}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
