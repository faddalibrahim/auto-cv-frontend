import Icon from "components/icon/Icon";
import BottomNavStyles from "./bottomnav.module.scss";

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

const BottomNav = () => {
  return (
    <div className={BottomNavStyles.bottomNav}>
      <Icon
        className={BottomNavStyles.icon}
        type={MATERIAL_ICONS_OUTLINED}
        name={ARTICLE}
        text="resumes"
        direction="column"
      />
      <Icon
        className={BottomNavStyles.icon}
        type={MATERIAL_ICONS_OUTLINED}
        name={NOTIFICATIONS}
        text="notifs"
        direction="column"
      />
      <Icon
        className={BottomNavStyles.icon}
        type={MATERIAL_ICONS}
        name={ADD}
        text="new"
        direction="column"
      />
      <Icon
        className={BottomNavStyles.icon}
        type={MATERIAL_ICONS}
        name={FACE}
        text="profile"
        direction="column"
      />
      <Icon
        className={BottomNavStyles.icon}
        type={MATERIAL_ICONS}
        name={SETTINGS}
        text="settings"
        direction="column"
      />
    </div>
  );
};

export default BottomNav;
