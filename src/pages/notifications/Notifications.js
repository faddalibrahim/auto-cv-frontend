import NotificationCard from "./NotificationCard";
import FullMessage from "./FullMessage";

import NotificationsStyles from "./notifications.module.scss";

import dummy_notifications from "./dummy_notifications";

import Skeleton from "components/skeleton/Skeleton";

import { useState, useEffect } from "react";

const Notifications = () => {
  const [inbox, setInbox] = useState([]);

  const [notificationIndex, setNotificationIndex] = useState(null);

  useEffect(
    () => setTimeout(() => setInbox([...dummy_notifications]), 1000),
    []
  );

  return (
    <div className={NotificationsStyles.wrapper}>
      <div className={NotificationsStyles.notificationCards}>
        {inbox?.length ? (
          inbox.map(({ id, date, subject, from, message }, index) => (
            <div onClick={() => setNotificationIndex(index)}>
              <NotificationCard
                date={date}
                subject={subject}
                from={from}
                message={message}
              />
            </div>
          ))
        ) : (
          <>
            <Skeleton width="100%" />
            <br />
            <Skeleton width="100%" />
            <br />
            <Skeleton width="100%" />
            <br />
            <Skeleton width="100%" />
            <br />
            <Skeleton width="100%" />
          </>
        )}
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
