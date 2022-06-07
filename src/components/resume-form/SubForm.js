// libraries
import { useState } from "react";

// styles
import SubFormStyles from "./sub-form.module.scss";

// redux
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "store/actions/Actions";

// components
import Icon from "components/icon/Icon";
import Input from "components/input/Input";
import {
  CaretDownIcon,
  CaretUpIcon,
  CircleCheckIcon,
} from "components/icons/Icons.js";

const SubForm = ({ section }) => {
  const dispatch = useDispatch();
  const [isOpen, toggleDropdown] = useState(false);
  const OPEN = "open";
  const CLOSE = "close";

  return (
    <div>
      <header onClick={() => toggleDropdown(!isOpen)}>
        <Icon customSVG={<CircleCheckIcon />} />
        <span>{section.title}</span>
        <Icon customSVG={isOpen ? <CaretUpIcon /> : <CaretDownIcon />} />
      </header>
      <div className={SubFormStyles[`${isOpen ? OPEN : CLOSE}`]}>
        {section.fields.map((field) => (
          <>
            <Input
              label={field}
              id={field}
              onChange={(e) =>
                dispatch(updatePersonalInfo({ [e.target.id]: e.target.value }))
              }
            />
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default SubForm;
