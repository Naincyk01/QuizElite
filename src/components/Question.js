import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { increaseCount } from "../utils/ScoreSlice";

const Question = ({question,opt1,opt2,opt3,opt4,answer,link}) => {
  
  const dispatch = useDispatch();
  const handleclick = (data) => {
    if (correct == data) {
      dispatch(increaseCount());
    }
  };
  return (
    <div className="text-white flex flex-col justify-center items-center h-full w-screen gap-y-6">
      <div className="text-4xl">{"" + question}</div>
      <div className="flex flex-col text-2xl">
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10"
          onClick={() => handleclick(opt1)}
        >
          {"" + opt1}
        </Link>
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10"
          onClick={() => handleclick(opt2)}
        >
         {"" + opt2}
        </Link>
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10"
          onClick={() => handleclick(opt3)}
        >
         {"" + opt3}
        </Link>
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10"
          onClick={() => handleclick(opt4)}
        >
          {"" + opt4}
        </Link>
      </div>
    </div>
  );
};

export default Question;
