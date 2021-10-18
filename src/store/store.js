import { createStore } from "redux";
import motherReducer from "store/reducers/motherReducer";

export const store = createStore(motherReducer);
