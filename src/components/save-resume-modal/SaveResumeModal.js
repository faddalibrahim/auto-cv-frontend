import Button from "components/button/Button";
import Input from "components/input/Input";

import SaveResumeModalStyles from "./saveresumemodal.module.scss";

const SaveResumeModal = () => {
  return (
    <div className={SaveResumeModalStyles.wrapper}>
      <div className={SaveResumeModalStyles.subWrapper}>
        <Input type="text" label="resume name" />
        <Button>save</Button>
      </div>
    </div>
  );
};

export default SaveResumeModal;
