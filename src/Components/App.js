import React, { useEffect, useState } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ----------------------------Components----------------------------
import Header from "./Header";
import SideBar from "./SideBar";
import VideoList from "./VideoList";
import SearchPage from "./SearchPage";
import HiddenSidebar from "./HiddenSidebar";
import Loader from "./Loader";
import Error from "./Error";
// ----------------------------API----------------------------
import Youtube from "../Api/youtube";

const App = () => {
  // ----------------------------States----------------------------
  const [videos, setVideos] = useState([]);
  const [homePageVideos, setHomePageVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [prev, setPrev] = useState("");
  const [err, setError] = useState(false);
  const onTermSubmit = async (term) => {
    try {
      if (prev === term || term === "") return;
      setLoading(true);
      setPrev(term);
      const response = await Youtube.get("/search", {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    try {
      setLoading(true);
      const loadVideos = async (term) => {
        const response = await Youtube.get("/search", {
          params: {
            q: term,
          },
        });
        setHomePageVideos(response.data.items);
        setLoading(false);
      };

      loadVideos("programming");
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(true);
    }
  }, []);
  return (
    <div className="app">
      <Router>
        <Header
          onTermSubmit={onTermSubmit}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
        <hr />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__view">
              {showSideBar ? <SideBar /> : <HiddenSidebar />}
              {!loading && !err ? (
                <SearchPage videos={videos} />
              ) : err ? (
                <Error />
              ) : (
                <Loader />
              )}
            </div>
          </Route>
          <Route path="/">
            <div className="app__view">
              {showSideBar ? <SideBar /> : <HiddenSidebar />}
              {!loading && !err ? (
                <VideoList videos={homePageVideos} />
              ) : err ? (
                <Error />
              ) : (
                <Loader />
              )}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
