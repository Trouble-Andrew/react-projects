import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface State {
  counter: number;
  showCounter: boolean;
}

const initialState: State = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      console.log(state);
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

let store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions =  counterSlice.actions;
export default store;
