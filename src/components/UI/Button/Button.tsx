import React from 'react';

import './Button.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
