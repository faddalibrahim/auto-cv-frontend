//libraries
import { useState } from "react";

//components
import Button from "components/button/Button";
import Input from "components/input/Input";

// utils
import { EMAIL } from "utils/FormConstants";
import validateFields from "utils/ValidateFields";

//styles
import HomeStyles from "pages/home/Home.module.scss";

const ForgotPassword = () => {
  const [fields, setField] = useState({
    [EMAIL]: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { ok, message } = validateFields([fields]);
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
      <h1>Forgot Password</h1>
      <small className={HomeStyles.directive}>
        enter your email to receive a reset link
      </small>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type={EMAIL}
          placeholder={EMAIL}
          onChange={handleFieldChange}
          id={EMAIL}
        />
        <Button>request reset link</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
