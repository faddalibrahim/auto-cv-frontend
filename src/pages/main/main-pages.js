import Profile from "pages/auth/profile/Profile";
import Create from "pages/create/Create";
import Notifications from "pages/notifications/Notifications";
import Resumes from "pages/resumes/Resumes";
import Settings from "pages/settings/Settings";
import ResumeHome from "pages/resume-home/ResumeHome";

const RESUME_HOME = "home";
const PROFILE = "profile";
const RESUMES = "resumes";
const CREATE = "create";
const NOTIFICATIONS = "notifications";
const SETTINGS = "settings";

const mainPages = {
  [RESUME_HOME]: <ResumeHome />,
  [PROFILE]: <Profile />,
  [RESUMES]: <Resumes />,
  [CREATE]: <Create />,
  [NOTIFICATIONS]: <Notifications />,
  [SETTINGS]: <Settings />,
};

export default mainPages;
