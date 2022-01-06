import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// ----------------------------Material UI Icons----------------------------
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../css/Header.css";

const Header = ({ onTermSubmit, setShowSideBar, showSideBar }) => {
  const [inputSearch, setInputSearch] = useState("");

  const onInputChange = (e) => {
    setInputSearch(e.target.value);
  };

  const onSearchClick = () => {
    onTermSubmit(inputSearch);
  };
  const onMenuClick = () => {
    console.log("clicked");
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="menu__icon" onClick={onMenuClick} />
        <Link to="/">
          <img
            className="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
            alt="youtube-icon"
          />
        </Link>
      </div>
      <div className="header__center">
        <input
          type="text"
          value={inputSearch}
          onChange={onInputChange}
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="search__icon" onClick={onSearchClick} />
        </Link>
      </div>
      <div className="header__right">
        <SearchIcon className="search__icon search__icon__right" />
        <VideoCallIcon className="icon__right" />
        <AppsIcon className="icon__right" />
        <NotificationsIcon className="icon__right" />
        <AccountCircleIcon className="avatar icon__right " />
      </div>
    </div>
  );
};

export default Header;
