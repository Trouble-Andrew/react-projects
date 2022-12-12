export interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  onClose: () => void;
}

export interface ModalOverlayProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export interface BackdropProps extends React.ComponentPropsWithoutRef<'div'> {
  onClose: () => void;
}
