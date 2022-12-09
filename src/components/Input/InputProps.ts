export interface InputProps {
  label: string;
  inputId: string;
  inputType: string;
  inputState: {
    value: string;
    isValid: null | boolean;
  };
  changeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  blurHandler: (event: React.FormEvent<HTMLInputElement>) => void;
}
