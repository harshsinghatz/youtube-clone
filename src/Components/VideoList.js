import React from "react";
import "../css/VideoList.css";
import VideoCard from "./VideoCard";

function VideoList({ videos }) {
  const videoList = videos.map((video) => (
    <VideoCard video={video} key={video.id.videoId} />
  ));
  return (
    <div className="video__list">
      <h1>Recommended videos</h1>
      <hr />
      <div className="video__list__videos">{videoList}</div>
    </div>
  );
}

export default VideoList;
