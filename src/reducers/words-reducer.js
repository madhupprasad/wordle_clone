import { createSlice } from "@reduxjs/toolkit";

export const wordsReducer = createSlice({
  name: "words",
  initialState: { value: [] },
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { save } = wordsReducer.actions;
export default wordsReducer.reducer;
