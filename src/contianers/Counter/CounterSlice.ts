import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    increaseBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseBy: (state, action: PayloadAction<number>) => {
      if (state.value >= action.payload) {
        state.value -= action.payload;
      } else {
        state.value = 0;
      }
    },
  },
});

export const CounterReducer = CounterSlice.reducer;

export const { increase, decrease, increaseBy, decreaseBy } =
  CounterSlice.actions;

console.log(increase());
