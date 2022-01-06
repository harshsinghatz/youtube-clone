import axios from "axios";

// const KEY = "AIzaSyB240s1QRzAYlA-_xFUrPxUBwlgISv0MV4";
const KEY = process.env.REACT_APP_YOUTUBE_API;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
    type: "video",
  },
});
