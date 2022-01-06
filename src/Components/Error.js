import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "../css/Error.css";

const Error = () => {
  return (
    <div className="error">
      <ErrorIcon className="error--icon" />
      <h2 className="error--text">Oops, something went wrong!</h2>
    </div>
  );
};

export default Error;
