import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface State {
  counter: CounterState;
  auth: AuthState;
}

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
}

const initialCounterState: CounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState: AuthState = {
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
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
    login() {},
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

let store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
