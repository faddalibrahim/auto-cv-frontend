// libraries
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

// components
import Login from "pages/auth/login/Login";
import Register from "pages/auth/register/Register";
import ForgotPassword from "pages/auth/forgot-password/ForgotPassword";
import ResetPassword from "pages/auth/reset-password/ResetPassword";
import Error404 from "pages/errors/Error404/Error404";
import Welcome from "./Welcome";
import Info from "pages/info/Info";
import VerifyEmail from "pages/auth/verify-email/VerifyEmail";
import Playground from "pages/playground/Playground";

// styles
import HomeStyles from "./Home.module.scss";

// utils
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_EMAIL,
  PLAYGROUND,
} from "utils/routes";

const Home = () => {
  let { path } = useRouteMatch();
  return (
    <div className={HomeStyles.homeContainer}>
      <Welcome />
      <div className={HomeStyles.authRoutesContainer}>
        <Router>
          <Switch>
            <Route exact path={`${path}`} component={Info} />
            <Route path={`${path}/${LOGIN}`} component={Login} />
            <Route path={`${path}/${REGISTER}`} component={Register} />
            <Route
              path={`${path}/${FORGOT_PASSWORD}`}
              component={ForgotPassword}
            />
            <Route
              path={`${path}/${RESET_PASSWORD}`}
              component={ResetPassword}
            />
            <Route path={`${path}/${VERIFY_EMAIL}`} component={VerifyEmail} />
            <Route path={`${path}/${PLAYGROUND}`} component={Playground} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Home;
