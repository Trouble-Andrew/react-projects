import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from 'interfaces';

export interface CartState {
  items: CartItem['item'][];
  totalQuantity: number;
  changed: boolean;
}

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,

  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity ?? 0;
      state.items = action.payload.items ?? [];
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingItem: CartItem['item'] | undefined = state.items.find(
        (item) => item.id === id,
      );

      state.totalQuantity--;
      state.changed = true;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
