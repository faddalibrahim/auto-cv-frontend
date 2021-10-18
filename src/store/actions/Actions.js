import { INCREMENT, DECREMENT, SIGN_IN } from "./ActionTypes";

export const incrementAction = (step = 1) => {
  return {
    type: INCREMENT,
    payload: step,
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
