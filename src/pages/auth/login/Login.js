//libraries
import { useState } from "react";
import { NavLink } from "react-router-dom";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { REGISTER, FORGOT_PASSWORD } from "utils/routes";
import { PASSWORD, EMAIL } from "utils/FormConstants";
import validateFields from "utils/ValidateFields";
import { studentLogin } from "network/axios/apiHandlers";
import { MAIN } from "utils/routes";

const Login = (props) => {
  const [fields, setField] = useState({
    [EMAIL]: "",
    [PASSWORD]: "",
  });

  const [showLoader, setShowLoader] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const { ok, message } = validateFields([fields, true, false]);
    if (!ok) {
      alert(message);
      return;
    }

    setShowLoader(true);

    studentLogin(fields)
      .then((response) => {
        console.log(response);
        if (response.data.ok) {
          localStorage.setItem("auto-cv-token", response.data.data.token);
          // props.history.push({
          //   pathname: "/",
          //   state: {},
          // });
          window.location.replace("/");
        } else {
          alert(response.data.message);
          setShowLoader(false);
        }
      })
      .catch((error) => {
        setShowLoader(false);
        alert("something went wrong, Please try again later.");
      });
  };

  const handleFieldChange = (e) => {
    const updatedFieldKey = e.target.id;
    const updatedField = { [updatedFieldKey]: e.target.value };
    setField({ ...fields, ...updatedField });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} autoComplete="off">
        <Input
          type={EMAIL}
          placeholder={EMAIL}
          id={EMAIL}
          onChange={handleFieldChange}
        />
        <Input
          type={PASSWORD}
          placeholder={PASSWORD}
          id={PASSWORD}
          onChange={handleFieldChange}
        />
        <NavLink to={FORGOT_PASSWORD}>forgot password?</NavLink>
        <Button>login</Button>
      </form>
      <div>
        <span>don't have an account?</span>{" "}
        <NavLink to={REGISTER}>Register</NavLink>
      </div>
      {showLoader ? "loading..." : null}
    </div>
  );
};

export default Login;
