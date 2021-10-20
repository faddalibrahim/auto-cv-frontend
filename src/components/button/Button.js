import ButtonStyles from "./button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={ButtonStyles.styles}>
      {children}
    </button>
  );
};

export default Button;
