import { useState } from "react";
import Icon from "components/icon/Icon";
import Input from "components/input/Input";
import {
  CHECK_CIRCLE_OUTLINE,
  MATERIAL_ICONS,
  MATERIAL_ICONS_OUTLINED,
  KEYBOARD_ARROW_DOWN,
} from "utils/MaterialIconsData";

// styles
import ResumeFormStyles from "./resume-form.module.scss";

import headers from "./ResumeFormHeaders";

const ResumeForm = () => {
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
              <Input placeholder={field} />
            ))}
          </div>
        </section>
      ))}
    </form>
  );
};

export default ResumeForm;
