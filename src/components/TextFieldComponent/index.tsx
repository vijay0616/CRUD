import TextField from "@mui/material/TextField";
import { TextFieldProps } from "./types";

export const TextFieldComponent = (props: TextFieldProps): JSX.Element => {
  const {
    id,
    label,
    color,
    disabled,
    error,
    required,
    value,
    autoComplete,
    autoFocus,
    defaultValue,
    name,
    multiline,
    placeholder,
    className,
  } = props;
  return (
    <TextField
      variant="outlined"
      id={id}
      label={label}
      name={name}
      className={className}
      color={color}
      disabled={disabled}
      error={error}
      required={required}
      value={value}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      multiline={multiline}
      placeholder={placeholder}
      onChange={props.onchangeHandler}
      onKeyDown={props.keyDownHandler}
      onKeyUp={props.keyUpHandler}
    />
  );
};
