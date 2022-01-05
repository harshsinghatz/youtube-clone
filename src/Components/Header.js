import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../css/Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = { inputSearch: "" };

  onInputChange = (e) => {
    this.setState({ inputSearch: e.target.value });
  };

  onSearchClick = (e) => {
    this.props.onTermSubmit(this.state.inputSearch);
  };

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <MenuIcon className="menu__icon" />
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
            value={this.state.inputSearch}
            onChange={this.onInputChange}
            placeholder="Search"
          />
          <Link to={`/search/${this.state.inputSearch}`}>
            <SearchIcon className="search__icon" onClick={this.onSearchClick} />
          </Link>
        </div>
        <div className="header__right">
          <VideoCallIcon className="icon__right" />
          <AppsIcon className="icon__right" />
          <NotificationsIcon className="icon__right" />
          <AccountCircleIcon className="avatar" />
        </div>
      </div>
    );
  }
}

export default Header;
