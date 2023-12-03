import { useImmer } from "use-immer";
import { Dragger } from "../components/dragger";
import { useNavigate } from "react-router-dom";
import { save } from "../reducers/words-reducer";
import { useDispatch } from "react-redux";

const WordGiver2 = () => {
  const count = 5;
  const [list, setList] = useImmer(
    Array.from(Array(count).fill({ value: "" }))
  );
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  return (
    <div className="w-full h-full flex flex-col border-8 border-solid border-white justify-center items-center gap-2">
      <Dragger list={list} setList={setList} />
      <button
        onClick={() => {
          console.log(list);
          dispatcher(save([...list]));
          navigate("/word-giver-3");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default WordGiver2;
