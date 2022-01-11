import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    // console.log(user);
    // console.log(res.data.token);
    // console.log(res.data.userId);
    if (res.data.token) {
      localStorage.setItem("Authorization", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      window.location.href = "/";
    }
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    // console.log(user);
    // console.log(res.data.token);
    // console.log(res.data.userId);
    if (res.data.token) {
      localStorage.setItem("Authorization", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      window.location.href = "/";
    }
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
