import { PERSONAL_INFO, DECREMENT, SIGN_IN } from "./../actions/ActionTypes";

export const personalInfoReducer = (state = {}, action) => {
  if (action.type === PERSONAL_INFO) {
    return action.payload;
  }

  return state;
};

export const educationReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export const achievementsAwardsReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export const workExperienceReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export const projectsResearchReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export const coCurricularActivitiesReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export const skillsReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};
