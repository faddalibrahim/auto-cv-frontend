// libraries
import { useState } from "react";
import { withRouter } from "react-router-dom";

// components
import ResumeForm from "components/resume-form/ResumeForm";
import ResumeSheet from "components/resume-sheet/ResumeSheet";
import Icon from "components/icon/Icon";
import SaveResumeModal from "components/save-resume-modal/SaveResumeModal";

import {
  DownloadIcon,
  FullscreenIcon,
  FileAddIcon,
} from "components/icons/Icons";

// styles
import CreatePageStyles from "./create.module.scss";

const Create = (props) => {
  const [saveResumeModal, setShowSaveResumeModal] = useState(false);

  return (
    <div className={CreatePageStyles.wrapper}>
      <ResumeForm />

      <div className={CreatePageStyles.resumeSheetContainer}>
        <ResumeSheet />
      </div>

      <div className={CreatePageStyles.actions}>
        <div onClick={() => props.history.push("/print")}>
          <Icon customSVG={<DownloadIcon />} />
        </div>
        <div>
          <Icon customSVG={<FullscreenIcon />} />
        </div>
        <div onClick={() => setShowSaveResumeModal(true)}>
          <Icon customSVG={<FileAddIcon />} />
        </div>
      </div>

      {saveResumeModal ? (
        <SaveResumeModal setShowSaveResumeModal={setShowSaveResumeModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default withRouter(Create);
