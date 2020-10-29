import React from "react";
import "./VideoFooter.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="video__footer">
      <div className="footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="footer__ticker">
          <MusicNoteIcon className="footer__music__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p className="ticker">{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="footer__logo"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
