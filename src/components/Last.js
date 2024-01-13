import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Last = () => {
  const score = useSelector((store) => store.Score.count);
  const authStatus = useSelector(
    (store) => store.authenticationDetails.isAuthenticated
  );

  if (!authStatus) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="text-purple-500 h-screen flex flex-col items-center justify-center gap-y-8 bg-purple-100">
      <div className="w-80 h-80 rounded-full border-4 border-purple-600 border-dashed flex items-center justify-center max-sm:w-64 max-sm:h-64">
        <div
          className="w-72 h-72 rounded-full border-8 border-purple-500 animate-pulse flex items-center justify-center font-bold
                text-9xl max-sm:w-60 max-sm:h-60 max-sm:text-7xl"
        >
          {"" + score}/5
        </div>
      </div>
      <div className="font-bold text-4xl max-sm:text-2xl">Your Score.........</div>
    </div>
  );
};

export default Last;