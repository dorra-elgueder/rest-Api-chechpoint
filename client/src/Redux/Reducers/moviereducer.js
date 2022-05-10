import { GETMOVIES, GETONEMOVIE } from "../Actiontypes/userActiontype";

const initialState = {
  movies: [],
  movie: {},
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETMOVIES:
      return { ...state, movies: action.payload.movies };

    case GETONEMOVIE:
      return { ...state, movie: action.payload.onemovie };

    default:
      return state;
  }
};
export default movieReducer;
