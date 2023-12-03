import { Link } from "react-router-dom";

const OpeningPage = () => {
  return (
    <div className="w-full h-full flex border-8 border-solid border-white">
      <div className="w-full h-full flex justify-center items-center border-r border-solid border-white">
        <div className="text-green-500 text-3xl font-bold hover:underline cursor-pointer">
          <Link to={`word-giver-1`}>Giver</Link>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center border-l border-solid border-white">
        <div className="text-purple-500 text-3xl font-bold hover:underline cursor-pointer">
          Guesser
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
