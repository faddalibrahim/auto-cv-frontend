const Icon = ({ name, type, className }) => {
  return (
    <i id={className} className={`${type} ${className}`}>
      {name}
    </i>
  );
};

export default Icon;
