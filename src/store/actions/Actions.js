import { store } from "store/store";
import { PERSONAL_INFO, DECREMENT, SIGN_IN } from "./ActionTypes";

export const updatePersonalInfo = (fieldValue) => {
  return {
    type: PERSONAL_INFO,
    payload: { ...store.getState().personalInfo, ...fieldValue },
  };
};

export const decrementAction = (step = -1) => {
  return {
    type: DECREMENT,
    payload: step,
  };
};

export const signInAction = () => {
  return {
    type: SIGN_IN,
  };
};
