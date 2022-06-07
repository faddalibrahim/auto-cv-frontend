import { FileIcon } from "components/icons/Icons";

import ResumeDocStyles from "./resume-doc.module.scss";

const ResumeDoc = () => {
  return (
    <div className={ResumeDocStyles.wrapper}>
      <FileIcon />
      <small>facebook</small>
    </div>
  );
};

export default ResumeDoc;
