import InputStyles from "./input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={InputStyles.styles}
    />
  );
};

export default Input;
