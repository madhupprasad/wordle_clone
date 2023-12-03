import { createSlice } from "@reduxjs/toolkit";

export const secondCounterReducer = createSlice({
  name: "secondCounter",
  initialState: {
    value: 60,
  },
  reducers: {
    incrementSecond: (state) => {
      if (state.value >= 120) return;
      state.value += 5;
    },
    decrementSecond: (state) => {
      if (state.value === 10) return;
      state.value -= 5;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementSecond, decrementSecond, incrementByAmount } =
  secondCounterReducer.actions;

export default secondCounterReducer.reducer;
