import React from "react";
import "./CastingVideo.css";
import castingVideo from "../../media/casting-en.mp4";

const CastingVideo = () => {
  return (
    <div className="video-container">
      <h1>Casting</h1>
      <video src={castingVideo} controls autoPlay loop muted />
    </div>
  );
};

export default CastingVideo;
