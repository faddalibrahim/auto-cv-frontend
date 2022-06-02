import InputStyles from "./input.module.css";

const Input = ({ type, placeholder, onChange, id }) => {
  return (
    <div className={InputStyles.wrapper}>
      <input
        type={type}
        className={InputStyles.input}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <small>{placeholder}</small>
      </label>
    </div>
  );
};

export default Input;
