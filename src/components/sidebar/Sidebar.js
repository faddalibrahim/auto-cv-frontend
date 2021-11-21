import Icon from "components/icon/Icon";
import SidebarStyles from "./sidebar.module.scss";

// utils
import {
  ADD,
  NOTIFICATIONS,
  ARTICLE,
  MATERIAL_ICONS_OUTLINED,
  MATERIAL_ICONS,
  SETTINGS,
  LOGOUT,
  FACE,
} from "utils/MaterialIconsData";

const Sidebar = ({ setCurrentRoute, currentRoute }) => {
  return (
    <div className={SidebarStyles.sidebar}>
      <div onClick={() => setCurrentRoute("profile")}>
        <Icon
          className={SidebarStyles.icon}
          type={MATERIAL_ICONS}
          name={FACE}
          text="profile"
          direction="column"
          style={{
            backgroundColor: `${currentRoute === "profile" ? "#ef5350" : ""}`,
            color: `${currentRoute === "profile" ? "#fff" : ""}`,
          }}
        />
      </div>
      <div>
        <div onClick={() => setCurrentRoute("resumes")}>
          <Icon
            style={{
              backgroundColor: `${currentRoute === "resumes" ? "#ef5350" : ""}`,
              color: `${currentRoute === "resumes" ? "white" : ""}`,
            }}
            className={SidebarStyles.icon}
            type={MATERIAL_ICONS_OUTLINED}
            name={ARTICLE}
            text="resumes"
            direction="column"
          />
        </div>
        <div onClick={() => setCurrentRoute("create")}>
          <Icon
            style={{
              backgroundColor: `${currentRoute === "create" ? "#ef5350" : ""}`,
              color: `${currentRoute === "create" ? "white" : ""}`,
            }}
            className={SidebarStyles.icon}
            type={MATERIAL_ICONS}
            name={ADD}
            text="create"
            direction="column"
          />
        </div>
        <div onClick={() => setCurrentRoute("notifications")}>
          <Icon
            style={{
              backgroundColor: `${
                currentRoute === "notifications" ? "#ef5350" : ""
              }`,
              color: `${currentRoute === "notifications" ? "white" : ""}`,
            }}
            className={SidebarStyles.icon}
            type={MATERIAL_ICONS_OUTLINED}
            name={NOTIFICATIONS}
            text="notifications"
            direction="column"
          />
        </div>
      </div>
      <div>
        <div onClick={() => setCurrentRoute("settings")}>
          <Icon
            style={{
              backgroundColor: `${
                currentRoute === "settings" ? "#ef5350" : ""
              }`,
              color: `${currentRoute === "settings" ? "white" : ""}`,
            }}
            className={SidebarStyles.icon}
            type={MATERIAL_ICONS}
            name={SETTINGS}
            text="settings"
            direction="column"
          />
        </div>
        <Icon
          className={SidebarStyles.icon}
          type={MATERIAL_ICONS}
          name={LOGOUT}
          text="logout"
          direction="column"
        />
      </div>
    </div>
  );
};

export default Sidebar;
