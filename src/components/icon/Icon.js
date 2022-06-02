/**
 * Icon component
 *
 * @param {String} name The name of the google material icon
 * @param {String} type The type of the google material icon : outlined or solid
 * @param {String} label Text to label the icon
 * @param {String} direction display of icon and its label : side by side (row) or stack (column)
 * @param {String} className classname for custom css classes
 * @param {String} style additonal custom inline styling
 * @param {Component} customSVG pass your own icons instead
 *
 * @returns
 */

const Icon = ({
  name,
  type,
  label,
  direction,
  className,
  style,
  customSVG = null,
}) => {
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
      {customSVG ? customSVG : <i className={type}>{name}</i>}
      <small className="icon-text">{label}</small>
    </div>
  );
};

export default Icon;
