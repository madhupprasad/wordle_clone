import { useSelector, useDispatch } from "react-redux";
import {
  decrementLetter,
  incrementLetter,
} from "../reducers/letter-counter-reducer";
import { decrementWord, incrementWord } from "../reducers/word-counter-reducer";
import {
  decrementSecond,
  incrementSecond,
} from "../reducers/second-counter-reducer";
import { Link } from "react-router-dom";

const WordGiver1 = () => {
  const letterCount = useSelector((state) => state.letterCounter.value);
  const wordCount = useSelector((state) => state.wordCounter.value);
  const secondCount = useSelector((state) => state.secondCounter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full flex flex-col border-8 border-solid border-white justify-center items-center gap-2">
      <div className="flex justify-center items-center gap-2">
        <div>No. of letters: </div>
        <button onClick={() => dispatch(incrementLetter())}>+</button>
        <span>{letterCount}</span>
        <button onClick={() => dispatch(decrementLetter())}>-</button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div>No. of words: </div>
        <button onClick={() => dispatch(incrementWord())}>+</button>
        <span>{wordCount}</span>
        <button onClick={() => dispatch(decrementWord())}>-</button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div>Timing for each word: </div>
        <button onClick={() => dispatch(incrementSecond())}>+</button>
        <span>{secondCount}s</span>
        <button onClick={() => dispatch(decrementSecond())}>-</button>
      </div>
      <div className="button">
        <Link to={`/word-giver-2`}>Next</Link>
      </div>
    </div>
  );
};

export default WordGiver1;
