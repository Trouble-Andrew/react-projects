export interface ErrorModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
}

export interface BackdropProps {
  onConfirm: () => void;
}
