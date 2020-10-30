import React from "react";
import "./App.css";
import Video from "./components/Video/Video";
import video1 from "./assets/videos/video1.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={video1}
          channel="ivokrustev"
          description="Check this out this TikTok clone"
          song="Can't touch this - MC Hummer"
          likes={305}
          messages={54}
          shares={23}
        />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
