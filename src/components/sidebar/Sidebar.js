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
      <div>
        <Icon type={MATERIAL_ICONS} name={FACE} />
      </div>
      <div>
        <Icon
          type={MATERIAL_ICONS}
          name={ADD}
          className={SidebarStyles.active}
        />
        <Icon type={MATERIAL_ICONS_OUTLINED} name={NOTIFICATIONS} />
        <Icon type={MATERIAL_ICONS_OUTLINED} name={ARTICLE} />
      </div>
      <div>
        <Icon type={MATERIAL_ICONS} name={SETTINGS} />
        <Icon type={MATERIAL_ICONS} name={LOGOUT} />
      </div>
    </div>
  );
};

export default Sidebar;
