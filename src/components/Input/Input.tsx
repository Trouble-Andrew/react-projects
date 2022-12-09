import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ReactNode,
} from 'react';
import classes from './Input.module.scss';
// import { InputProps } from './InputProps';
import './Input.module.scss';

interface Props {
  children?: ReactNode;
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

type InputHandle = {
  focus: () => void;
};

const Input = forwardRef<InputHandle, Props>(
  (
    { label, inputId, inputType, inputState, changeHandler, blurHandler },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function activate() {
      inputRef.current?.focus();
    }

    useImperativeHandle(ref, () => ({
      focus() {
        activate();
      },
    }));

    return (
      <div
        className={`${classes.control} ${
          inputState.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={inputId}>{label}</label>
        <input
          ref={inputRef}
          type={inputType}
          id={inputId}
          value={inputState.value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
      </div>
    );
  },
);

export default Input;
