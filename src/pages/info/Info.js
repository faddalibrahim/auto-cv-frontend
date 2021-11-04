// libraries
import { useRouteMatch, Link } from "react-router-dom";

// utils
import { LOGIN, REGISTER } from "utils/routes";
import Button from "components/button/Button";
import Icon from "components/icon/Icon";
import { CHECK_CIRCLE_OUTLINE } from "utils/MaterialIconsData";
import info_page_data from "./InfoPageData";

// styles
import InfoPageStyles from "./Info.module.scss";

const Info = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      {info_page_data.map((data, index) => (
        <div key={index} className={InfoPageStyles.info}>
          <Icon name={CHECK_CIRCLE_OUTLINE} />
          <p>{data}</p>
        </div>
      ))}

      <div className={InfoPageStyles.linkButtons}>
        <Link to={`${path}/${LOGIN}`}>
          <Button>{LOGIN}</Button>
        </Link>
        <Link to={`${path}/${REGISTER}`}>
          <Button>{REGISTER}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
