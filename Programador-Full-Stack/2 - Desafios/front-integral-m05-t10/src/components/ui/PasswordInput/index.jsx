import { useState } from "react";
import PropTypes from "prop-types";
import showPasswordIcon from "../../../assets/showPassword.svg";
import hidePassword from "../../../assets/hidePassword.svg";
import "./styles.css";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = error && error.length > 0;

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={`custom-input-password ${hasError ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <div className={`password-input ${hasError ? "has-error" : ""}`}>
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={hasError ? "error" : ""}
          {...rest}
        />
        <span className="password-toggle-icon" onClick={handleTogglePassword}>
          {showPassword ? (
            <img src={hidePassword} alt="hide-icon" />
          ) : (
            <img src={showPasswordIcon} alt="show-icon" />
          )}
        </span>
        {hasError && <span className="error-message-password">{error}</span>}
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

PasswordInput.defaultProps = {
  placeholder: "",
};

export default PasswordInput;
