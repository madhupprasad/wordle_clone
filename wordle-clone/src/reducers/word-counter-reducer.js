import { createSlice } from "@reduxjs/toolkit";

export const wordCounterReducer = createSlice({
  name: "wordCounter",
  initialState: {
    value: 5,
  },
  reducers: {
    incrementWord: (state) => {
      if (state.value >= 15) return;
      state.value += 1;
    },
    decrementWord: (state) => {
      if (state.value === 0) return;
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementWord, decrementWord, incrementByAmount } =
  wordCounterReducer.actions;

export default wordCounterReducer.reducer;
