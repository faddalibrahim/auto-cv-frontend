import React from "react";
import "./Notification.css";
import Icon from "components/icon/Icon";

import CaretDownIcon from "components/icons/caret-down-icon/CaretDownIcon";
import CaretUpIcon from "components/icons/caret-up-icon/CaretUpIcon";

const Notification = ({ time, sender, subject, body }) => {
  const [showBody, setBody] = React.useState(false);

  const toggleBody = () => {
    setBody(!showBody);
  };

  return (
    <div className="notifi" onClick={toggleBody}>
      <div className="header">
        <small id="date">{time}</small>
        {showBody ? (
          <Icon customSVG={<CaretUpIcon />} />
        ) : (
          <Icon customSVG={<CaretDownIcon />} />
        )}
      </div>
      <div className="content">
        <div id="sender">{sender}</div>
        <div id="content">
          <h4 id="subject">{subject}</h4>
          {showBody ? <p id="body">{body}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Notification;
