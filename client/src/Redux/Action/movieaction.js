import axios from "axios";
import { GETMOVIES, GETONEMOVIE } from "../Actiontypes/userActiontype";

export const getmovies = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/movies/getmovies");
    dispatch({ type: GETMOVIES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addmovies = (newMovies) => async (dispatch) => {
  try {
    const res = await axios.post("/api/movies", newMovies);
    dispatch(getmovies());
  } catch (error) {
    console.log(error);
  }
};

export const deletemovie = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/movies/deletemovie/${id}`);
    dispatch(getmovies());
  } catch (error) {
    console.log(error);
  }
};
export const editMovie = (id, updatemovie) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/movies/updatemovie/${id}`, updatemovie);
    dispatch(getmovies());
  } catch (error) {
    console.log(error);
  }
};

export const getonemovie = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/movies/${id}`);
    console.log(res.data);
    dispatch({ type: GETONEMOVIE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
