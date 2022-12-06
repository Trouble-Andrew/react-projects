import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.scss';

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className={`${styles.button}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
