import { INCREMENT, DECREMENT, SIGN_IN } from "./../actions/ActionTypes";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return !state ? state : state + action.payload;
    default:
      return state;
  }
};

export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};
