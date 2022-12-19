export interface CartItem {
  item: {
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
}

export interface ProductItem {
  title: string;
  description: string;
  price: number;
}
