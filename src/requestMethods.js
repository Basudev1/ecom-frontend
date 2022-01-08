import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1/";
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.token;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${Token}` },
});
