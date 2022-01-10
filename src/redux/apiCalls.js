import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    // console.log(user);
    console.log(res.data.token);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    }
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
