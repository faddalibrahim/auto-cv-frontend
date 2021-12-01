import InputStyles from "./input.module.css";

const Input = ({ type, placeholder, onChange, id }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={InputStyles.styles}
      id={id}
      onChange={onChange}
    />
  );
};

export default Input;
