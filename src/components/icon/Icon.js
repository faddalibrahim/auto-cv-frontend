const Icon = ({ name, type, className, text, direction, style }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexFlow: direction,
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        ...style,
      }}
    >
      <i className={type}>{name}</i>
      <small>{text}</small>
    </div>
  );
};

export default Icon;
