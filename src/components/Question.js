import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { increaseCount } from "../utils/ScoreSlice";

const Question = ({question,opt1,opt2,opt3,opt4,answer,link}) => {
  
  const dispatch = useDispatch();
  const handleclick = (data) => {
    if (answer == data) {
      dispatch(increaseCount());
    }
  };
  return (
    <div className="text-white flex justify-center items-center h-screen w-full bg-purple-100">
      <div className="flex flex-col justify-center items-center w-2/3  h-[80%] gap-y-14">
      <div className="text-3xl text-purple-800 font-semibold w-full h-32 flex justify-center items-center">{"" + question}</div>
      <div className="flex flex-col text-xl">
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-12 w-[190px]"
          onClick={() => handleclick(opt1)}
        >
          {"" + opt1}
        </Link>
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-12 w-[190px]"
          onClick={() => handleclick(opt2)}
        >
         {"" + opt2}
        </Link>
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-12 w-[190px]"
          onClick={() => handleclick(opt3)}
        >
         {"" + opt3}
        </Link>
        <Link
          to={link}
          className="border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-12 w-[190px]"
          onClick={() => handleclick(opt4)}
        >
          {"" + opt4}
        </Link>
      </div>
      
      </div>
    </div>
  );
};

export default Question;
