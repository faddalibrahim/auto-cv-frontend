import ButtonStyles from "./button.module.css";

const Button = (props) => {
  return <button className={ButtonStyles.styles}>{props.children}</button>;
};

export default Button;
