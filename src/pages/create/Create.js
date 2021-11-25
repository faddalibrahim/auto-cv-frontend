import Button from "components/button/Button";
import ResumeForm from "components/resume-form/ResumeForm";
import ResumeSheet from "components/resume-sheet/ResumeSheet";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Icon from "components/icon/Icon";

import {
  MATERIAL_ICONS_OUTLINED,
  FILE_DOWNLOAD,
  SHARE,
  FULL_SCREEN,
} from "utils/MaterialIconsData";

import CreatePageStyles from "./create.module.scss";
import { withRouter } from "react-router-dom";

const Create = (props) => {
  return (
    <>
<<<<<<< HEAD
      <ResumeSheet />

      <Link to={`/to_pdf/ToPDF`} activeClassName="current">
        <div>
          DOWNLOAD
        </div>
      </Link>
=======
      <div className={CreatePageStyles.resumeSheetContainer}>
        <ResumeSheet />
      </div>

      <div className={CreatePageStyles.actions}>
        <div onClick={() => props.history.push("/print")}>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={FILE_DOWNLOAD} />
        </div>
        <div>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={FULL_SCREEN} />
        </div>
        <div>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={SHARE} />
        </div>
      </div>

>>>>>>> 7e89734bf0eac9cb500d8ccbf59d72951cdcade5
      <ResumeForm />
    </>
  );
};

export default withRouter(Create);
