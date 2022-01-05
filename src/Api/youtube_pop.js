import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet,contentDetails,statistics",
    maxResults: 15,
    chart: "mostPopular",
    key: KEY,
    type: "video",
  },
});
