const FullMessage = ({ notificationData }) => {
  return (
    <div>
      <h1>{notificationData["subject"]}</h1>
      <br />
      {notificationData["message"]}
    </div>
  );
};

export default FullMessage;
