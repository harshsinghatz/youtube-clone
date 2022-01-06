import React from "react";
import "../css/SearchPage.css";
import SearchVideo from "./SearchVideo";
import TuneIcon from "@mui/icons-material/Tune";
function SearchPage({ videos }) {
  const searchVideos = videos.map((video) => (
    <SearchVideo video={video} key={video.id.videoId} />
  ));
  return (
    <div className="searchPage">
      <div className="filter">
        <TuneIcon className="filter__icon" />
        <span>FILTER</span>
      </div>
      <hr />
      <div className="videos">{searchVideos}</div>
    </div>
  );
}

export default SearchPage;
