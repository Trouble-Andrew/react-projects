import React, { ReactNode, forwardRef, useRef } from 'react';
import styles from './Input.module.scss';
// import { InputProps } from './InputProps';

interface InputProps {
  label: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
  children?: ReactNode;
}

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(({ label, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input id={'amount_' + input.id} {...input} ref={ref} />
    </div>
  );
});

export default Input;
