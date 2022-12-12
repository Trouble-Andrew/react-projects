import { CartItem } from 'interfaces';

export interface CartItemProps {
  name: string;
  price: number;
  amount: number;
  // onRemove: (id: string) => void;
  // onAdd: (item: CartItem) => void;
  onRemove: () => void;
  onAdd: () => void;
}
