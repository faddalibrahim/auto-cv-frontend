import { withRouter } from "react-router-dom";
import Error404Svg from "./Error404Svg";

const Error404 = (props) => {
  const page = props.match.url.split("/").pop();
  return (
    <div>
      <Error404Svg />
      opps! we don't have a <span style={{ color: "#ef5350" }}>
        {page}
      </span>{" "}
      page
    </div>
  );
};

export default withRouter(Error404);
