import NotificationCardStyles from "./notification-card.module.scss";

const NotificationCard = ({ date, from, subject, message }) => {
  return (
    <aside className={NotificationCardStyles.wrapper}>
      <small className={NotificationCardStyles.date}>{date}</small>
      <br />
      <br />
      <strong className={NotificationCardStyles.from}>{from}</strong>
      <br />
      <br />
      <article className={NotificationCardStyles.subject}>{subject}</article>
      <article className={NotificationCardStyles.message}>{message}</article>
    </aside>
  );
};

export default NotificationCard;
