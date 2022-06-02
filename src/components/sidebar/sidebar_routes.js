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

import HomeIcon from "components/home-icon/HomeIcon";
import BellIcon from "components/bell-icon/BellIcon";
import FileIcon from "components/file-icon/FileIcon";
import PlusIcon from "components/plus-icon/PlusIcon";
import LogoutIcon from "components/logout-icon/LogoutIcon";

const routeNames = {
  RESUME_HOME: "home",
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
    label: routeNames.PROFILE,
    customSVG: null,
  },
  {
    label: routeNames.RESUME_HOME,
    customSVG: <HomeIcon />,
  },
  {
    // name: ARTICLE,
    // iconType: MATERIAL_ICONS_OUTLINED,
    label: routeNames.RESUMES,
    customSVG: <FileIcon />,
  },
  {
    // name: ADD,
    // iconType: MATERIAL_ICONS,
    label: routeNames.CREATE,
    customSVG: <PlusIcon />,
  },
  {
    // name: NOTIFICATIONS,
    // iconType: MATERIAL_ICONS_OUTLINED,
    label: routeNames.NOTIFICATIONS,
    customSVG: <BellIcon />,
  },
  {
    name: SETTINGS,
    iconType: MATERIAL_ICONS,
    label: routeNames.SETTINGS,
    customSVG: null,
  },
  {
    // name: LOGOUT,
    // iconType: MATERIAL_ICONS,
    label: routeNames.LOGOUT,
    customSVG: <LogoutIcon />,
  },
];

export default routes;
