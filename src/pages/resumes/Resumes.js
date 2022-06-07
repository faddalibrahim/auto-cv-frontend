import Input from "components/input/Input";
import ResumeDoc from "components/resume-doc/ResumeDoc";

import ResumeStyles from "./resumes.module.scss";

const Resumes = () => {
  return (
    <div className={ResumeStyles.wrapper}>
      <Input type="text" label="search" />

      <div className={ResumeStyles.docs}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((doc) => (
          <ResumeDoc />
        ))}
      </div>
    </div>
  );
};

export default Resumes;
