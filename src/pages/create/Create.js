import ResumeForm from "components/resume-form/ResumeForm";
import ResumeSheet from "components/resume-sheet/ResumeSheet";

import Icon from "components/icon/Icon";

import {
  MATERIAL_ICONS_OUTLINED,
  FILE_DOWNLOAD,
  SHARE,
  FULL_SCREEN,
} from "utils/MaterialIconsData";

import CreatePageStyles from "./create.module.scss";
import { withRouter } from "react-router-dom";
import DownloadIcon from "components/download-icon/DownloadIcon";
import FullscreenIcon from "components/fullscreen-icon/FullscreenIcon";
import FileAddIcon from "components/file-add-icon/FileAddIcon";

const Create = (props) => {
  return (
    <div className={CreatePageStyles.wrapper}>
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
        <div>
          <Icon customSVG={<FileAddIcon />} />
        </div>
      </div>

      <ResumeForm />
    </div>
  );
};

export default withRouter(Create);
