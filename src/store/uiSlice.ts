import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  cartIsShown: boolean;
}

const initialUIState: UIState = {
  cartIsShown: true,
};

const UISlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice.reducer;
