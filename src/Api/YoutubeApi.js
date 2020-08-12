import axios from "axios";

let KEY = "AIzaSyCwuDXBZ3gUBrOiuYFN7iuhyn8nuz3x2ZE";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY,
};

let YoutubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default YoutubeApi;