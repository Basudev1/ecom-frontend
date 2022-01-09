import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1/";
// const getToken = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// ).currentUser.token;

const Token =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser === null
    ? ""
    : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.token;
// const Token = "";
// const Token = `${getToken}?!=null`;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${Token}` },
});
