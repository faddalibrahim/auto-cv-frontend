import {
  HomeIcon,
  BellIcon,
  FileIcon,
  PlusIcon,
  LogoutIcon,
  CogIcon,
  ProfileIcon,
} from "components/icons/Icons";

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
