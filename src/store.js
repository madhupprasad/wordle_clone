import { configureStore } from "@reduxjs/toolkit";
import letterCounterReducer from "./reducers/letter-counter-reducer";
import wordCounterReducer from "./reducers/word-counter-reducer";
import secondCounterReducer from "./reducers/second-counter-reducer";
import wordsReducer from "./reducers/words-reducer";

export default configureStore({
  reducer: {
    letterCounter: letterCounterReducer,
    wordCounter: wordCounterReducer,
    secondCounter: secondCounterReducer,
    words: wordsReducer,
  },
});
