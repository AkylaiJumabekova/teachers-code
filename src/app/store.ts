import { configureStore } from '@reduxjs/toolkit';
import {
  CounterReducer,
  CounterState,
} from '../contianers/Counter/CounterSlice.ts';

export const store = configureStore<{ counter: CounterState }>({
  reducer: {
    counter: CounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
