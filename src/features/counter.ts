import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  counter: number;
};

const initialCounter: CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounter,
  reducers: {
    increment: state => {
      return {
        counter: state.counter + 1,
      };
    },
    decrement: state => {
      return {
        counter: state.counter - 1,
      };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
