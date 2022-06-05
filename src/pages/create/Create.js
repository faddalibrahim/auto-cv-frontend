import ResumeForm from "components/resume-form/ResumeForm";
import ResumeSheet from "components/resume-sheet/ResumeSheet";

import Icon from "components/icon/Icon";
import CreatePageStyles from "./create.module.scss";
import { withRouter } from "react-router-dom";
import DownloadIcon from "components/icons/download-icon/DownloadIcon";
import FullscreenIcon from "components/icons/fullscreen-icon/FullscreenIcon";
import FileAddIcon from "components/icons/file-add-icon/FileAddIcon";

import { useState } from "react";
import SaveResumeModal from "components/save-resume-modal/SaveResumeModal";

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
        <div onClick={() => setShowSaveResumeModal(!saveResumeModal)}>
          <Icon customSVG={<FileAddIcon />} />
        </div>
      </div>

      {saveResumeModal ? <SaveResumeModal /> : ""}
    </div>
  );
};

export default withRouter(Create);
