import React from "react";
import "./Notification.css";
import Icon from "components/icon/Icon";
import {
  KEYBOARD_ARROW_DOWN,
  KEYBOARD_ARROW_UP,
  MATERIAL_ICONS_OUTLINED,
  FACE,
} from "utils/MaterialIconsData";

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
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_UP} />
        ) : (
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
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
