import { useState } from "react";
import Icon from "components/icon/Icon";
import Input from "components/input/Input";
import PersonalInformation from "components/personal-information/PersonalInformation";
import Education from "components/education/Education";
import Awards from "components/achievements/Awards";
import Experience from "components/work_experience/Experience";
import Projects from "components/projects/Projects";
import Curricular from "components/curricular/Curricular";
import Skills from "components/skills/Skills";
import {
  CHECK_CIRCLE_OUTLINE,
  MATERIAL_ICONS,
  MATERIAL_ICONS_OUTLINED,
  KEYBOARD_ARROW_DOWN,
} from "utils/MaterialIconsData";

// styles
import ResumeFormStyles from "./resume-form.module.scss";

import headers from "./ResumeFormHeaders";

// redux stuff
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "store/actions/Actions";

const ResumeForm = () => {
  const dispatch = useDispatch();
  return (
    <form autoComplete="off" className={ResumeFormStyles.form}>
      {headers.map((header, index) => (
        <section key={index}>
          <header>
            <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
            <span>{header.title}</span>
            <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
          </header>
          <div style={{ padding: "0 1rem" }}>
            {header.fields.map((field) => (
              <Input
                placeholder={field}
                id={field}
                onChange={(e) =>
                  dispatch(
                    updatePersonalInfo({ [e.target.id]: e.target.value })
                  )
                }
              />
            ))}
          </div>
        </section>
      ))}
    </form>
  );
};

export default ResumeForm;
