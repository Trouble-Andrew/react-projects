import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  cartIsShown: boolean;
  notification: null | Notification;
}
export interface Notification {
  status: string;
  title: string;
  message: string;
}

const initialUIState: UIState = {
  cartIsShown: true,
  notification: null,
};

const UISlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice.reducer;
