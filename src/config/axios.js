import axios from "axios";

export const mindsApi = axios.create({
  baseURL: "http://localhost:4000/api/",
});
