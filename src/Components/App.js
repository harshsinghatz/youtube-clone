import React from "react";
import "../css/App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import VideoList from "./VideoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Youtube from "../Api/youtube";
import YoutubePop from "../Api/youtube_pop";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
    });
  };
  // onHomePage = async (term) => {
  //   const trending = await YoutubePop.get("/");
  //   console.log(trending.data.items);
  //   this.setState({ videos: trending.data.items });
  // };
  render() {
    return (
      //BEM class naming convention
      <div className="app">
        <Router>
          <Header onTermSubmit={this.onTermSubmit} />
          <hr />
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app__view">
                <SideBar />
                <SearchPage videos={this.state.videos} />
              </div>
            </Route>
            <Route path="/">
              <div className="app__view">
                <SideBar />
                <VideoList
                  videos={this.state.videos}
                  onload={this.onHomePage}
                />
                {/* {console.log(this.state.videos)} */}
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
