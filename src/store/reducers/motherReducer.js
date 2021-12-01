import { combineReducers } from "redux";
import {
  personalInfoReducer,
  educationReducer,
  achievementsAwardsReducer,
  workExperienceReducer,
  projectsResearchReducer,
  coCurricularActivitiesReducer,
  skillsReducer,
} from "./Reducers";

const motherReducer = combineReducers({
  personalInfo: personalInfoReducer,
  education: educationReducer,
  achievementsAwards: achievementsAwardsReducer,
  workExperience: workExperienceReducer,
  projectsResearch: projectsResearchReducer,
  coCurricularActivities: coCurricularActivitiesReducer,
  skills: skillsReducer,
});

export default motherReducer;
