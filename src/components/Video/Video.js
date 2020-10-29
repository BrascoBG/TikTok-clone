import React, { useRef, useState } from "react";
import video1 from "../../assets/videos/video1.mp4";
import VideoFooter from "../VideoFooter/VideoFooter";
import "./Video.css";

function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        loop
        className="video__player"
        ref={videoRef}
        onClick={onVideoPress}
        src={video1}
      ></video>
      <VideoFooter
        channel="ivokrustev"
        description="Check out this island"
        song="Can't touch this - MC Hummer"
      />
    </div>
  );
}

export default Video;
