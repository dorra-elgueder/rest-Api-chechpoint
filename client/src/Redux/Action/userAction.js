//register
import {
  FAIL,
  LOADING,
  LOGIN,
  REGISTER,
  GET_CURRENT,
  LOGOUT,
} from "../Actiontypes/userActiontype";
import axios from "axios";

export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/users/register", newUser);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

//login
export const login = (user, Navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/users/login", user);
    dispatch({ type: LOGIN, payload: res.data });
    Navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

//get current
export const getCurrent = () => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/users/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//logout
export const logout = () => ({ type: LOGOUT });
