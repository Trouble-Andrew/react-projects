import { UserData } from "interfaces";

export interface CheckoutProps {
  onCancel: () => void;
  onConfirm: (data: UserData) => void;
}