//libraries
import { NavLink } from "react-router-dom";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { TEXT } from "utils/FormConstants";

const ForgotPassword = () => {
  return (
    <div>
      <h1 style={{ color: "#aaa" }}>Forgot Password</h1>
      <small style={{ color: "#bbb" }}>
        enter your email to receive a reset link
      </small>
      <form action="">
        <Input type={TEXT} placeholder="email" />
        <Button>request reset link</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
