import Profile from "pages/auth/profile/Profile";
import Create from "pages/create/Create";
import Notifications from "pages/notifications/Notifications";
import Resumes from "pages/resumes/Resumes";
import Settings from "pages/settings/Settings";

const PROFILE = "profile";
const RESUMES = "resumes";
const CREATE = "create";
const NOTIFICATIONS = "notifications";
const SETTINGS = "settings";

const mainPages = {
  [PROFILE]: <Profile />,
  [RESUMES]: <Resumes />,
  [CREATE]: <Create />,
  [NOTIFICATIONS]: <Notifications />,
  [SETTINGS]: <Settings />,
};

export default mainPages;
