//libraries
import { NavLink } from "react-router-dom";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { REGISTER, FORGOT_PASSWORD } from "utils/routes";
import { TEXT, PASSWORD } from "utils/FormConstants";

const Login = () => {
  return (
    <div>
      <h1 style={{ color: "#aaa" }}>Login</h1>
      <form action="">
        <Input type={TEXT} placeholder="email" />
        <Input type={PASSWORD} placeholder="password" />
        <NavLink
          to={FORGOT_PASSWORD}
          style={{
            color: "#ef5350",
            margin: "0.5rem 0",
            display: "inline-block",
          }}
        >
          forgot password?
        </NavLink>
        <Button>login</Button>
      </form>
      <div style={{ margin: "2rem 0" }}>
        <span style={{ color: "#aaa" }}>don't have an account?</span>{" "}
        <NavLink to={REGISTER} style={{ color: "#ef5350" }}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
