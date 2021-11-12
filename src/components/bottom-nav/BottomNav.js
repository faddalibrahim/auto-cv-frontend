import Icon from "components/icon/Icon";
import BottomNavStyles from "./bottomnav.module.scss";

// utils
import { bottomNavs, COLUMN } from "utils/MaterialIconsData";

const BottomNav = () => {
  return (
    <div className={BottomNavStyles.bottomNav}>
      {bottomNavs.map(({ type, name, text }, index) => (
        <Icon
          key={index}
          className={BottomNavStyles.icon}
          type={type}
          name={name}
          text={text}
          direction={COLUMN}
        />
      ))}
    </div>
  );
};

export default BottomNav;
