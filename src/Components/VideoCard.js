import React from "react";
import "../css/VideoCard.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function VideoCard({ video }) {
  return (
    <div className="videoCard">
      <img
        className="videoCard__thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="videoCard__info">
        <AccountCircleIcon className="videoCard__avatar" />
        <div className="video__text">
          <h4 className="title">{video.snippet.title}</h4>
          <p>{video.snippet.channelTitle}</p>
          <p>2M views• 1 month ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
