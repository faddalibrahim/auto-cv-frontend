// libraries
import { Route, Redirect } from "react-router-dom";

// components
import Main from "pages/main/Main";

const Protected = (props) => {
  let isAuth = false;
  if (localStorage.getItem("auto-cv-token")) {
    isAuth = true;
  }
  return (
    <Route
      render={(props) =>
        isAuth ? (
          <Main />
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
