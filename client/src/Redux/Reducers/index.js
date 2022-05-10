import { combineReducers } from "redux";
import userReducer from "./userReducers";
import movieReducer from "./moviereducer";
const rootReducer = combineReducers({ userReducer, movieReducer });
export default rootReducer;
