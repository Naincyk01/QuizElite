import { FaLongArrowAltRight } from "react-icons/fa";
import loginImg from "../assests/login.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { storeCurrentuser } from "../utils/SignSlice";
import { setAuthentication } from "../utils/AuthenticationSlice";

const Login = () => {
  const details = useSelector((store) => store.signData.details);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [visibility, setVisibility] = useState("hidden");
  const dispatch = useDispatch();
  const handleVisibility = () => {
    if (!isAuthenticated) {
      setVisibility("visible");
    }
  };

  const handleLogin = () => {
    details.find((x) => {
      if (x.name === name && x.password === password) {
        setIsAuthenticated("./start");
        dispatch(storeCurrentuser({ name, password }));
        dispatch(setAuthentication());
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    handleLogin();
  }, [name, password]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-purple-100">
      <div
        className="flex w-[70%] h-[80%] border-2 bg-white max-lg:w-full max-lg:mx-12 max-md:flex-col 
      max-md:items-center max-md:justify-center max-sm:mx-4 max-md:h-[95%] max-md:py-12 border-purple-200"
      >
        
        <div className="flex justify-center items-center w-[50%] max-md:w-full">
          <div className="bg-purple-500 rounded-full w-80 h-80">
            <img src={loginImg} alt="login" />
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2 max-md:w-full">
          <div className="flex flex-col w-[400px] h-[500px] gap-y-10 items-center justify-center">
            <div className="text-purple-900 text-2xl font-extrabold">User Login</div>
            <div className="flex flex-col gap-y-6">
              <input
                className="text-purple-900 px-2 rounded-full h-[46px] w-[250px] bg-gray-100 font-semibold"
                placeholder="Email/Username"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="px-2 text-purple-900 rounded-full h-[46px] w-[250px] bg-gray-100 font-semibold"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to={isAuthenticated}>
              <button
                className="text-purple-900 px-10 rounded-3xl h-12 flex justify-center items-center bg-purple-400 w-52 font-semibold text-xl"
                onClick={() => handleVisibility()}
              >
                Login
              </button>
            </Link>

            <div className={`${visibility} text-red-500`}>
              username of password is incorrect
            </div>
            <button className="text-purple-900 flex justify-center items-center gap-x-2 text-lg">
              <Link to="./signIn">Create account</Link>
              <FaLongArrowAltRight className="mt-1" />
            </button>
          </div>
        </div>

        {/* <div className="flex justify-center items-center w-1/3 bg-purple-500 max-md:w-full">
          <div className="max-sm:w-60 max-sm:h-60">
            <img src={loginImg} alt="login" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
