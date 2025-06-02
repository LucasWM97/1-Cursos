import PropTypes from "prop-types";
import "./styles.css";

const CustomInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  type,
  ...rest
}) => {
  const hasError = error && error.length > 0;

  return (
    <div className={`custom-input ${hasError ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={hasError ? "error" : ""}
        {...rest}
      />
      {hasError && <span className="error-message">{error}</span>}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

CustomInput.defaultProps = {
  type: "text",
  placeholder: "",
  error: "",
};

export default CustomInput;
