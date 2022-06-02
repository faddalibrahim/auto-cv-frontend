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
  const ss = {
    true: "open",
    false: "close",
  };

  const reSize = (state) => {
    setOpen(!state);
  };

  return (
    <>
      <header onClick={() => reSize(open)}>
        <Icon customSVG={<CircleCheckIcon />} />
        <span>{section.title}</span>
        <Icon customSVG={open ? <CaretUpIcon /> : <CaretDownIcon />} />
      </header>

      {/* <div className={`${SubFormStyles[open]}`}> */}
      <div className={SubFormStyles[ss[open]]}>
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
    </>
  );
};

export default SubForm;
