import { NavLink } from "react-router-dom";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { LOGIN } from "utils/routes";
import {
  TEXT,
  PASSWORD,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  REPEAT_PASSWORD,
} from "utils/FormConstants";

const Register = () => {
  return (
    <div>
      <div>
        <h1 style={{ color: "#aaa" }}>Register</h1>
        <form action="">
          <Input type={TEXT} placeholder={FIRST_NAME} />
          <Input type={TEXT} placeholder={LAST_NAME} />
          <Input type={EMAIL} placeholder={EMAIL} />
          <Input type={PASSWORD} placeholder={PASSWORD} />
          <Input type={PASSWORD} placeholder={REPEAT_PASSWORD} />
          <Button>register</Button>
        </form>
        <div style={{ margin: "2rem 0" }}>
          <span style={{ color: "#aaa" }}>already have an account?</span>{" "}
          <NavLink to={`${LOGIN}`} style={{ color: "#ef5350" }}>
            login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
