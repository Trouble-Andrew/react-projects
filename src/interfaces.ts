export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface UserData {
  name: string;
  street: string;
  city: string;
  postalCode: string;
}
