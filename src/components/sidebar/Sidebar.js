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

const Sidebar = () => {
  return (
    <div className={SidebarStyles.sidebar}>
      <Icon
        className={SidebarStyles.icon}
        type={MATERIAL_ICONS}
        name={FACE}
        text="profile"
        direction="column"
      />
      <div>
        <Icon
          className={SidebarStyles.icon}
          type={MATERIAL_ICONS_OUTLINED}
          name={ARTICLE}
          text="resumes"
          direction="column"
        />
        <Icon
          className={SidebarStyles.icon}
          type={MATERIAL_ICONS}
          name={ADD}
          text="new"
          direction="column"
        />
        <Icon
          className={SidebarStyles.icon}
          type={MATERIAL_ICONS_OUTLINED}
          name={NOTIFICATIONS}
          text="notifications"
          direction="column"
        />
      </div>
      <div>
        <Icon
          className={SidebarStyles.icon}
          type={MATERIAL_ICONS}
          name={SETTINGS}
          text="settings"
          direction="column"
        />
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
