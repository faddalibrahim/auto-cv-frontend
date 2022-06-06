// components
import Icon from "components/icon/Icon";

// styles
import SidebarStyles from "./sidebar.module.scss";

// utils
import pages from "./sidebar_pages";

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const APP_THEME = "#A76A99";
  const WHITE = "#fff";

  return (
    <div className={SidebarStyles.sidebar}>
      {pages.map((page, index) => (
        <div onClick={() => setCurrentPage(page.name)} key={page.name}>
          <Icon
            className={SidebarStyles.icon}
            type={page.iconType}
            name={page.name}
            label={page.name}
            direction="column"
            customSVG={page.customSVG}
            style={{
              backgroundColor: `${currentPage === page.name ? APP_THEME : ""}`,
              color: `${currentPage === page.name ? WHITE : ""}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
