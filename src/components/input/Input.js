import InputStyles from "./input.module.css";

const Input = ({ type, label, placeholder, onChange, id }) => {
  return (
    <div className={InputStyles.wrapper}>
      <input
        type={type}
        className={InputStyles.input}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
      />
      <label htmlFor={id}>
        <small>{label}</small>
      </label>
    </div>
  );
};

export default Input;
