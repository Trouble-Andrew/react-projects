export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  onClick?: () => void;
}
