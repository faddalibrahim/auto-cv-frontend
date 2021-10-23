//styles
import HomeStyles from "pages/home/Home.module.scss";

const VerifyEmail = (props) => {
  const [auto_cv_token, actual_toke] = props.location.search
    .slice(1)
    .split("=");
  console.log(auto_cv_token, actual_toke);
  // const queryString = props.location.url.split("?").pop();
  // const token = queryString.split("=").pop();

  // if (token.trim().length) {
  //   return <div>verifying email...</div>;
  // }

  return (
    <div>
      <h1>Email Confirmation</h1>
      <small className={HomeStyles.directive}>
        a confirmation link has been sent your email
      </small>
    </div>
  );
};

export default VerifyEmail;
