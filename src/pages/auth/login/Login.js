//libraries
import { useState } from "react";
import { NavLink } from "react-router-dom";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";
import Loader from "components/loader/Loader";

// utils
import { REGISTER, FORGOT_PASSWORD } from "utils/routes";
import { PASSWORD, EMAIL } from "utils/FormConstants";
import validateFields from "utils/ValidateFields";
import { studentLogin } from "network/axios/apiHandlers";

const Login = () => {
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
          setShowLoader(false);
          console.log(showLoader);
          if (!Number(response.data.data.isVerified)) {
            alert("you are not verified yet");
          }
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
      {showLoader ? <Loader /> : null}
    </div>
  );
};

export default Login;
