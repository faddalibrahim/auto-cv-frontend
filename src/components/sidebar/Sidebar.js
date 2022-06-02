import Icon from "components/icon/Icon";
import SidebarStyles from "./sidebar.module.scss";

import routes from "./sidebar_routes";

const Sidebar = ({ setCurrentRoute, currentRoute }) => {
  return (
    <div className={SidebarStyles.sidebar}>
      {routes.map((route, index) => (
        <div onClick={() => setCurrentRoute(route.label)} key={route.label}>
          <Icon
            className={SidebarStyles.icon}
            type={route.iconType}
            name={route.name}
            label={route.label}
            direction="column"
            customSVG={route.customSVG}
            style={{
              backgroundColor: `${
                currentRoute === route.label ? "#A76A99" : ""
              }`,
              color: `${currentRoute === route.label ? "#fff" : ""}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
