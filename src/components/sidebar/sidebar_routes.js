import {
  FACE,
  MATERIAL_ICONS,
  MATERIAL_ICONS_OUTLINED,
  ARTICLE,
  NOTIFICATIONS,
  SETTINGS,
  LOGOUT,
  ADD,
} from "utils/MaterialIconsData";

const routeNames = {
  PROFILE: "profile",
  RESUMES: "resumes",
  CREATE: "create",
  NOTIFICATIONS: "notifications",
  SETTINGS: "settings",
  LOGOUT: "logout",
};

const routes = [
  {
    name: FACE,
    iconType: MATERIAL_ICONS,
    text: routeNames.PROFILE,
  },
  {
    name: ARTICLE,
    iconType: MATERIAL_ICONS_OUTLINED,
    text: routeNames.RESUMES,
  },
  {
    name: ADD,
    iconType: MATERIAL_ICONS,
    text: routeNames.CREATE,
  },
  {
    name: NOTIFICATIONS,
    iconType: MATERIAL_ICONS_OUTLINED,
    text: routeNames.NOTIFICATIONS,
  },
  {
    name: SETTINGS,
    iconType: MATERIAL_ICONS,
    text: routeNames.SETTINGS,
  },
  {
    name: LOGOUT,
    iconType: MATERIAL_ICONS,
    text: routeNames.LOGOUT,
  },
];

export default routes;
