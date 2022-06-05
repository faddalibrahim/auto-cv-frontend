import Button from "components/button/Button";
import Input from "components/input/Input";

import SaveResumeModalStyles from "./saveresumemodal.module.scss";

const SaveResumeModal = ({ setShowSaveResumeModal }) => {
  return (
    <div className={SaveResumeModalStyles.wrapper}>
      <div className={SaveResumeModalStyles.subWrapper}>
        <Input type="text" label="resume name" />
        <Button onClick={() => setShowSaveResumeModal(false)}>save</Button>
      </div>
    </div>
  );
};

export default SaveResumeModal;
