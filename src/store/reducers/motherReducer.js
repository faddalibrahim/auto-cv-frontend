import { combineReducers } from "redux";
import { loggedReducer, counterReducer } from "./Reducers";

const motherReducer = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default motherReducer;
