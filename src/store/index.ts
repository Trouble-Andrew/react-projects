import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './cartSlice';
import UIReducer, { UIState } from './uiSlice';

export interface State {
  cart: CartState;
  ui: UIState;
}

let store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: UIReducer
  },
});

export default store;