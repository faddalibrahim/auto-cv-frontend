// import SideBar from "./SideBar";
import Error404 from "pages/errors/Error404/Error404";
import { Route, Redirect } from "react-router-dom";

const Protected = (props) => {
  let isAuth = false;
  return (
    <Route
      render={(props) =>
        isAuth ? (
          <Error404 />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: props.location,
            }}
          />
        )
      }
    />
  );
};
export default Protected;
