import { createSlice } from "@reduxjs/toolkit";

export const letterCounterSlice = createSlice({
  name: "letterCounter",
  initialState: {
    value: 5,
  },
  reducers: {
    incrementLetter: (state) => {
      if (state.value >= 7) return;
      state.value += 1;
    },
    decrementLetter: (state) => {
      if (state.value === 0) return;
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementLetter, decrementLetter, incrementByAmount } =
  letterCounterSlice.actions;

export default letterCounterSlice.reducer;
