import Button from "components/button/Button";
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

const Create = () => {
  return (
    <>
      <div className={CreatePageStyles.resumeSheetContainer}>
        <ResumeSheet />
      </div>

      <div className={CreatePageStyles.actions}>
        <div>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={FILE_DOWNLOAD} />
        </div>
        <div>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={FULL_SCREEN} />
        </div>
        <div>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={SHARE} />
        </div>
      </div>

      <ResumeForm />
    </>
  );
};

export default Create;
