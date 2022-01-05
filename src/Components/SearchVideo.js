import React from "react";
import "../css/SearchVideo.css";
// import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
function SearchVideo({ video }) {
  return (
    <div className="SearchVideo">
      <div className="SearchVideo__video">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className="video__duration">20:00</div>
      </div>
      <div className="SearchVideo__content">
        <h1 className="video__title">{video.snippet.title}</h1>
        <p>2M views • 10 days ago</p>
        <div className="channelDetail">
          <AccountCircleIcon className="channelLogo" src="" alt="random" />
          <p className="channelName">{video.snippet.channelTitle}</p>
          <VerifiedUserIcon />
        </div>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default SearchVideo;
