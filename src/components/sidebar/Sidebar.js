import Icon from "components/icon/Icon";
import SidebarStyles from "./sidebar.module.scss";

import routes from "./sidebar_routes";

const Sidebar = ({ setCurrentRoute, currentRoute }) => {
  return (
    <div className={SidebarStyles.sidebar}>
      {routes.map((route, index) => (
        <div onClick={() => setCurrentRoute(route.text)} key={route.text}>
          <Icon
            className={SidebarStyles.icon}
            type={route.iconType}
            name={route.name}
            text={route.text}
            direction="column"
            style={{
              backgroundColor: `${
                currentRoute === route.text ? "#ef5350" : ""
              }`,
              color: `${currentRoute === route.text ? "#fff" : ""}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
