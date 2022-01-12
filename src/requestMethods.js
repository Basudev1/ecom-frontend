import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1/";
// const getToken = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// ).currentUser.token;

// console.log(localStorage.getItem("token"));

const Token = localStorage.getItem("Authorization");

// if (localStorage.getItem("persist:root")) {
//   Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser.token;
//   x = 10;
// } else {
//   x = 0;
// }
// console.log(x);
// let Token =
//   JSON.parse(localStorage.getItem("persist:root")).user === null
//     ? null
//     : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//         .currentUser.token;

// const Token = "";
// console.log(Token);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `${Token}` },
});
