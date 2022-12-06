import { User } from "interfaces";

export interface FormProps {
  onSubmitForm: (arg: User) => void;
}