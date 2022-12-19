export interface Product {
  title: string;
  quantity: number;
  description: string;
  price: number;
  totalPrice: number;
  id: string;
}

export interface CartItem {
  item: Pick<
    Product,
    'title' | 'quantity' | 'price' | 'id' | 'quantity' | 'totalPrice'
  >;
}

export type ProductItem = Pick<
  Product,
  'title' | 'description' | 'price' | 'id'
>;
