const Icon = ({ name, type, className, text, direction }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexFlow: direction,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i className={type} style={{ userSelect: "none", padding: "0.5rem" }}>
        {name}
      </i>
      <small>{text}</small>
    </div>
  );
};

export default Icon;
