import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    alterByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
});

export const { increment, alterByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.cookie.value;

export default counterSlice.reducer;
