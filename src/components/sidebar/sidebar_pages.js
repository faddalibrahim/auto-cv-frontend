import HomeIcon from "components/icons/home-icon/HomeIcon";
import BellIcon from "components/icons/bell-icon/BellIcon";
import FileIcon from "components/icons/file-icon/FileIcon";
import PlusIcon from "components/icons/plus-icon/PlusIcon";
import LogoutIcon from "components/icons/logout-icon/LogoutIcon";
import CogIcon from "components/icons/cog-icon/CogIcon";
import ProfileIcon from "components/icons/profile-icon/ProfileIcon";

const pageNames = {
  RESUME_HOME: "home",
  PROFILE: "profile",
  RESUMES: "resumes",
  CREATE: "create",
  NOTIFICATIONS: "notifications",
  SETTINGS: "settings",
  LOGOUT: "logout",
};

const pages = [
  {
    name: pageNames.PROFILE,
    customSVG: <ProfileIcon />,
  },
  {
    name: pageNames.RESUME_HOME,
    customSVG: <HomeIcon />,
  },
  {
    name: pageNames.RESUMES,
    customSVG: <FileIcon />,
  },
  {
    name: pageNames.CREATE,
    customSVG: <PlusIcon />,
  },
  {
    name: pageNames.NOTIFICATIONS,
    customSVG: <BellIcon />,
  },
  {
    name: pageNames.SETTINGS,
    customSVG: <CogIcon />,
  },
  {
    name: pageNames.LOGOUT,
    customSVG: <LogoutIcon />,
  },
];

export default pages;
