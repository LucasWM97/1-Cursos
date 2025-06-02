import NumberFormat from "react-number-format";

const ValueInput = ({
  label,
  name,
  error,
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  const hasError = error && error.length > 0;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        value={value}
        placeholder={placeholder}
        onValueChange={onChange}
        {...rest}
      />
      {hasError && <span className="error-message">{error}</span>}
    </div>
  );
};

export default ValueInput;
