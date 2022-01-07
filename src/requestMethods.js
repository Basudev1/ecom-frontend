import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1/";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQ1OTdjOWNmNzViNmM0MjA4Yjc3MTEiLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNBZG1pbiI6ImZhbHNlIiwiaWF0IjoxNjQxNDY0NTE3LCJleHAiOjE2NDQwNTY1MTd9.SzbDiCKBr_JL-3mlr6R6KzW0I7OEilpqhmc4ZkRs5S8";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${Token}` },
});
