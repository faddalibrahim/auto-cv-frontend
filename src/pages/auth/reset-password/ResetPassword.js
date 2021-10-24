//libraries
import { useState } from "react";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { PASSWORD, REPEAT_PASSWORD } from "utils/FormConstants";
import validateFields from "utils/ValidateFields";

//styles
import HomeStyles from "pages/home/Home.module.scss";

//utils

import { HOME, LOGIN } from "utils/routes";

const ResetPassword = ({ location, history }) => {
  const queryString = location.search.slice(1);
  const [auto_cv_token, actual_token] = queryString.split("=");

  if (!queryString.trim().length || !actual_token.trim().length) {
    history.push(`${HOME}/${LOGIN}`);
  }

  const [fields, setField] = useState({
    [PASSWORD]: "",
    [REPEAT_PASSWORD]: "",
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    const { ok, message } = validateFields([fields, true, true]);
    if (!ok) {
      alert(message);
      return;
    }
    console.log(fields);
  };

  const handleFieldChange = (e) => {
    const updatedFieldKey = e.target.id;
    const updatedField = { [updatedFieldKey]: e.target.value };
    setField({ ...fields, ...updatedField });
  };
  return (
    <div>
      <h1>Reset Password</h1>
      <small className={HomeStyles.directive}>
        enter your new password below
      </small>
      <form onSubmit={handleResetPassword}>
        <Input
          type={PASSWORD}
          placeholder={PASSWORD}
          id={PASSWORD}
          onChange={handleFieldChange}
        />
        <Input
          type={PASSWORD}
          placeholder={REPEAT_PASSWORD}
          id={REPEAT_PASSWORD}
          onChange={handleFieldChange}
        />
        <Button>reset password</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
