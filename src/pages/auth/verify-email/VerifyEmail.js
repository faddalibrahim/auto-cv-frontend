//styles
import HomeStyles from "pages/home/Home.module.scss";

//utils
import { AUTO_CV_TOKEN } from "utils/AppConstants";
import ErrorBoundarySvg from "pages/errors/ErrorBoundary/ErrorBoundarySvg";
import EmailVerificationProcess from "./EmailVerificationProcess";

const VerifyEmail = ({ location, history }) => {
  const queryString = location.search.slice(1);

  if (queryString.trim().length) {
    const [auto_cv_token, actual_token] = queryString.split("=");
    if (auto_cv_token === AUTO_CV_TOKEN && actual_token.trim().length) {
      // return <EmailVerificationComponent token={actual_token}/>
      return (
        <EmailVerificationProcess token={actual_token} history={history} />
      );
    }

    // when query string has been tampered with
    return <ErrorBoundarySvg />;
  }

  return (
    <div>
      <h1>Verify your email</h1>
      <small className={HomeStyles.directive}>
        a confirmation link has been sent your email
      </small>
    </div>
  );
};

export default VerifyEmail;
