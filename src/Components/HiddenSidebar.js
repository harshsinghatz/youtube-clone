import React from "react";
import SideRow from "./SideRow";
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

const HiddenSidebar = () => {
  return (
    <div>
      <div className="sidebar hidden--sidebar">
        <SideRow Icon={HomeIcon} selected />
        <SideRow Icon={WhatshotIcon} />
        <SideRow Icon={SubscriptionsIcon} />
        <hr />
        <SideRow Icon={VideoLibraryIcon} />
        <SideRow Icon={HistoryIcon} />
        <SideRow Icon={OndemandVideoIcon} />
        <SideRow Icon={WatchLaterIcon} />
        <SideRow Icon={ThumbUpIcon} />
        <SideRow Icon={ExpandMoreIcon} />
        <hr />
      </div>
    </div>
  );
};

export default HiddenSidebar;
