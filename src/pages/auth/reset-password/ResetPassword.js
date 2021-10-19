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

const ResetPassword = () => {
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
