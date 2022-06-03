import NotificationCard from "./NotificationCard";
import FullMessage from "./FullMessage";

import NotificationsStyles from "./notifications.module.scss";

import { useState } from "react";

const Notifications = () => {
  const [inbox, setInbox] = useState([
    {
      id: 1,
      date: "21/05,2021",
      subject: "Donec tristique",
      from: "Sed ut",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 2,
      date: "21/05,2021",
      subject: "Curabitur sodales",
      from: "Li Europan",
      message:
        "Morbi rutrum finibus auctor. Mauris facilisis orci in odio dapibus, vel iaculis augue imperdiet. Sed dui neque, iaculis vitae hendrerit vitae, molestie a velit. Duis non metus ac diam convallis vulputate. Etiam lorem neque, sagittis pellentesque dolor in, tempus venenatis orci. Pellentesque fermentum dictum dictum. Sed nec posuere leo. In non neque magna.",
    },
    {
      id: 3,
      date: "21/05,2021",
      subject: "Morbi rutrum",
      from: "Aliquam faucibus",
      message:
        "Cras neque turpis, fringilla quis cursus a, molestie vitae leo. Sed sed laoreet metus, vel convallis ex. Etiam a mi turpis. Suspendisse nisl urna, tempor at mi in, ultricies tristique erat. Aliquam faucibus mauris quis tristique fermentum. Donec venenatis ac risus quis imperdiet. Sed tincidunt felis ac est pharetra porttitor. Ut non ipsum elementum, laoreet erat in, convallis neque. Duis lobortis augue id gravida suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    },
    {
      id: 4,
      date: "21/05,2021",
      subject: "Cras ullamcorper",
      from: "Etiam varius",
      message:
        "Ut a magna at elit sodales volutpat. Donec tristique ipsum ut purus interdum maximus. Curabitur sodales convallis urna quis cursus. Ut congue ornare mauris, sit amet aliquet metus porta sit amet. In laoreet luctus metus quis iaculis. Duis et purus in est scelerisque fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tortor lectus, egestas tempor fermentum eget, vestibulum a nulla. Nam rutrum, lacus a convallis sollicitudin, sapien sem consectetur velit, nec gravida nisl magna vitae ipsum. Ut in iaculis arcu",
    },
    {
      id: 5,
      date: "21/05,2021",
      subject: " Etiam a",
      from: "Curabitur sodales",
      message:
        "Curabitur scelerisque nibh eget dolor finibus, eu consectetur augue accumsan. Vivamus dictum arcu mauris, eget luctus lacus fringilla a. Curabitur ac metus malesuada libero tristique pulvinar. Nullam aliquam erat vulputate, scelerisque neque eu, fermentum eros. Phasellus feugiat venenatis diam vitae tempor. Nam diam sapien, molestie a nunc eu, eleifend aliquam neque. Suspendisse dapibus, massa viverra eleifend molestie, ex velit rutrum dui, eu semper felis arcu sed lectus. Etiam varius felis vel magna efficitur, a efficitur ipsum pulvinar. Vivamus lobortis, massa ac lacinia dapibus, ipsum augue pharetra nisi, quis semper sapien risus id velit. Aliquam erat volutpat. Nunc nisi neque, convallis in dolor nec, fringilla maximus diam. Pellentesque hendrerit orci a nisi auctor eleifend. Ut at fermentum tortor.",
    },
  ]);

  const [notificationIndex, setNotificationIndex] = useState(null);

  return (
    <div className={NotificationsStyles.wrapper}>
      <div className={NotificationsStyles.notificationCards}>
        {inbox.map(({ id, date, subject, from, message }, index) => (
          <div onClick={() => setNotificationIndex(index)}>
            <NotificationCard
              date={date}
              subject={subject}
              from={from}
              message={message}
            />
          </div>
        ))}
      </div>
      <div className={NotificationsStyles.messageContent}>
        {notificationIndex == null ? (
          "click on a message to view"
        ) : (
          <FullMessage notificationData={inbox[notificationIndex]} />
        )}
      </div>
    </div>
  );
};

export default Notifications;
