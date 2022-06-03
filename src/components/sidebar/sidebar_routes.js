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

import HomeIcon from "components/icons/home-icon/HomeIcon";
import BellIcon from "components/icons/bell-icon/BellIcon";
import FileIcon from "components/icons/file-icon/FileIcon";
import PlusIcon from "components/icons/plus-icon/PlusIcon";
import LogoutIcon from "components/icons/logout-icon/LogoutIcon";
import CogIcon from "components/icons/cog-icon/CogIcon";
import ProfileIcon from "components/icons/profile-icon/ProfileIcon";

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
    // name: FACE,
    // iconType: MATERIAL_ICONS,
    label: routeNames.PROFILE,
    customSVG: <ProfileIcon />,
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
    // name: SETTINGS,
    // iconType: MATERIAL_ICONS,
    label: routeNames.SETTINGS,
    customSVG: <CogIcon />,
  },
  {
    // name: LOGOUT,
    // iconType: MATERIAL_ICONS,
    label: routeNames.LOGOUT,
    customSVG: <LogoutIcon />,
  },
];

export default routes;
