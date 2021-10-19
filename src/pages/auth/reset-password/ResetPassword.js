//libraries

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { PASSWORD, REPEAT_PASSWORD } from "utils/FormConstants";

const ResetPassword = () => {
  return (
    <div>
      <h1 style={{ color: "#aaa" }}>Reset Password</h1>
      <small style={{ color: "#bbb" }}>enter your new password below</small>
      <form action="">
        <Input type={PASSWORD} placeholder={PASSWORD} />
        <Input type={PASSWORD} placeholder={REPEAT_PASSWORD} />
        <Button>reset password</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
