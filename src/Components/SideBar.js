// import HistoryIcon from "@material-ui/icons/History";
import React from "react";
import "../css/SideBar.css";
// ----------------------------Material UI Icons----------------------------
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryIcon from "@mui/icons-material/History";

import SideRow from "./SideRow";
function SideBar() {
  return (
    <div className="sidebar">
      <SideRow title="Home" Icon={HomeIcon} selected />
      <SideRow title="trending" Icon={WhatshotIcon} />
      <SideRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SideRow title="Library" Icon={VideoLibraryIcon} />
      <SideRow title="History" Icon={HistoryIcon} />
      <SideRow title="Your videos" Icon={OndemandVideoIcon} />
      <SideRow title="Watch Later" Icon={WatchLaterIcon} />
      <SideRow title="Liked videos" Icon={ThumbUpIcon} />
      <SideRow title="Show more" Icon={ExpandMoreIcon} />
      <hr />
    </div>
  );
}

export default SideBar;
