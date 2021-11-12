// libraries
import { NavLink } from "react-router-dom";
import { useState } from "react";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { LOGIN } from "utils/routes";
import validateFields from "utils/ValidateFields";
import {
  TEXT,
  PASSWORD,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  REPEAT_PASSWORD,
} from "utils/FormConstants";

import { HOME, VERIFY_EMAIL } from "utils/routes";
import { studentRegister } from "network/axios/apiHandlers";

const Register = (props) => {
  const [fields, setField] = useState({
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [EMAIL]: "",
    [PASSWORD]: "",
    [REPEAT_PASSWORD]: "",
  });

  const [showLoader, setShowLoader] = useState(false);

  const handleRegisteration = (e) => {
    e.preventDefault();
    const { ok, message } = validateFields([fields, true, true]);
    if (!ok) {
      alert(message);
      return;
    }

    setShowLoader(true);

    // send registeration details to backend
    const {
      "first name": firstname,
      "last name": lastname,
      email,
      password,
    } = fields;
    const finalFields = { firstname, lastname, email, password };

    studentRegister(finalFields)
      .then((response) => {
        if (response.data.ok) {
          props.history.push(`${HOME}/${VERIFY_EMAIL}`);
        }
      })
      .catch((error) => {
        setShowLoader(false);
        alert("something went wrong. Please, try again later");
      });
  };

  const handleChange = (e) => {
    const updatedFieldKey = e.target.id;
    const updatedField = { [updatedFieldKey]: e.target.value };
    setField({ ...fields, ...updatedField });
  };
  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleRegisteration} autoComplete="off">
          <Input
            type={TEXT}
            placeholder={FIRST_NAME}
            id={FIRST_NAME}
            onChange={handleChange}
          />
          <Input
            type={TEXT}
            placeholder={LAST_NAME}
            id={LAST_NAME}
            onChange={handleChange}
          />
          <Input
            type={EMAIL}
            placeholder={EMAIL}
            id={EMAIL}
            onChange={handleChange}
          />
          <Input
            type={PASSWORD}
            placeholder={PASSWORD}
            id={PASSWORD}
            onChange={handleChange}
          />
          <Input
            type={PASSWORD}
            placeholder={REPEAT_PASSWORD}
            id={REPEAT_PASSWORD}
            onChange={handleChange}
          />
          <Button>register</Button>
        </form>
        <div>
          <span>already have an account?</span>{" "}
          <NavLink to={`${LOGIN}`}>login</NavLink>
        </div>
      </div>
      {showLoader ? <div>loading...</div> : null}
    </div>
  );
};

export default Register;
