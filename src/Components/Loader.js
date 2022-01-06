import React from "react";
import "../css/Loader.css";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="loader">
      <h2 className="loading--text">Loading</h2>
      <CircularProgress className="loading--icon" />
    </div>
  );
};

export default Loader;
