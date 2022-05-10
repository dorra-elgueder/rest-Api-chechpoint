import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmovies } from "../Redux/Action/movieaction";
import Moviecard from "./Moviecard";

const Movielist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getmovies());
  }, []);
  const movies = useSelector((state) => state.movieReducer.movies);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexwrap: "wrap",
      }}
    >
      {movies.map((movie) => (
        <Moviecard movie={movie}></Moviecard>
      ))}
    </div>
  );
};

export default Movielist;
