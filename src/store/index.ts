import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './auth';
import counterReducer, { CounterState } from './counter';

export interface State {
  counter: CounterState;
  auth: AuthState;
}

let store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
