import { useState } from "react";

import Icon from "components/icon/Icon";
import Input from "components/input/Input";

import CaretDownIcon from "components/caret-down-icon/CaretDownIcon";
import CaretUpIcon from "components/caret-up-icon/CaretUpIcon";
import CircleCheckIcon from "components/circle-check-icon/CircleCheckIcon";

// styles
import ResumeFormStyles from "./resume-form.module.scss";

import sections from "./ResumeFormSections";

// redux stuff
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "store/actions/Actions";

const ResumeForm = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState("contracted");
  const reSize = (e, section) => {
    if (size === "contracted") {
      setSize("expanded");
      e.target.closest("section").classList.add(".hey");
      console.log(e.target.children);
    } else {
      setSize("contracted");
      e.target.closest("section").classList.remove(".hey");
      console.log(e.target.children);
    }
  };

  return (
    <form autoComplete="off" className={ResumeFormStyles.form}>
      {sections.map((section, index) => (
        <section key={index} id={section.title}>
          <header onClick={(e) => reSize(e, section.title)}>
            <Icon customSVG={<CircleCheckIcon />} />
            <span>{section.title}</span>
            <Icon customSVG={<CaretDownIcon />} />
          </header>
          <div className={`${ResumeFormStyles[size]}`}>
            {section.fields.map((field) => (
              <>
                <Input
                  placeholder={field}
                  id={field}
                  onChange={(e) =>
                    dispatch(
                      updatePersonalInfo({ [e.target.id]: e.target.value })
                    )
                  }
                />
                <br />
              </>
            ))}
          </div>
        </section>
      ))}
    </form>
  );
};

export default ResumeForm;
