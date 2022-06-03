import SubFormStyles from "./sub-form.module.scss";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "store/actions/Actions";

import Icon from "components/icon/Icon";

import Input from "components/input/Input";

import CaretDownIcon from "components/caret-down-icon/CaretDownIcon";
import CaretUpIcon from "components/caret-up-icon/CaretUpIcon";
import CircleCheckIcon from "components/circle-check-icon/CircleCheckIcon";

const SubForm = ({ section }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const map = {
    true: "open",
    false: "close",
  };

  const reSize = (state) => {
    setOpen(!state);
  };

  return (
    <div style={{ display: "flex", flexFlow: "column-reverse" }}>
      <div className={SubFormStyles[map[open]]}>
        {section.fields.map((field) => (
          <>
            <Input
              placeholder={field}
              id={field}
              onChange={(e) =>
                dispatch(updatePersonalInfo({ [e.target.id]: e.target.value }))
              }
            />
            <br />
          </>
        ))}
      </div>
      <header onClick={() => reSize(open)}>
        <Icon customSVG={<CircleCheckIcon />} />
        <span>{section.title}</span>
        <Icon customSVG={open ? <CaretUpIcon /> : <CaretDownIcon />} />
      </header>
    </div>
  );
};

export default SubForm;