export interface TextFieldProps {
  color: "primary" | "secondary";
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  value?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  multiline?: boolean;
  placeholder?: string;
  className?: string;
  onchangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyDownHandler?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  keyUpHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
