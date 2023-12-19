import { FaLongArrowAltRight } from "react-icons/fa";
import loginImg from "../assests/login.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

const Login = () => {
  const details = useSelector(store => store.signData.details);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [visibility, setVisibility] = useState("hidden");
  
  const handleVisibility = () => {
    if (!isAuthenticated) {
      setVisibility("visible");
    }
  };

  const handleLogin = () => {
    details.find((x) => {
      if (x.name === name && x.password === password) {
        setIsAuthenticated("./start");
        return null;
      }
      return null;
    });
   };


  useEffect(() => {
    handleLogin();
  }, [name, password]);
  

   return (
    <div className="h-screen flex justify-center items-center bg-purple-100">
      <div className="flex w-[70%] h-[80%] border-2 bg-white">

        <div className="flex justify-center items-center w-2/3">
          <div className="flex flex-col w-[400px] h-[500px] gap-y-10 items-center justify-center">
            <div className="text-purple-900 font-bold text-xl">
              User Login
            </div>
            <div className="flex flex-col gap-y-8">
              <input className="text-purple-900 px-2 rounded-2xl h-[37px] w-[250px] border-2 font-semibold" placeholder="Email"
               onChange={(e) => setName(e.target.value)}/>
              <input className="px-2 text-purple-800 rounded-2xl h-[37px] w-[250px] font-medium border-2" placeholder="password"
               onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Link to={isAuthenticated}><button className="text-purple-900 border-2 px-10 rounded-3xl h-10 flex justify-center items-center w-48 bg-purple-400"
            onClick={() => handleVisibility()}>Login</button>
</Link>
            
             <div className={`${visibility} text-red-500`}>
              username of password is incorrect
            </div>
            <button className="text-purple-900 flex justify-center items-center gap-x-2">
              <Link to="./signIn">Create account</Link>
              <FaLongArrowAltRight className="mt-1"/>
              </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-1/3 bg-purple-500">
          <div className="">
            <img src={loginImg} alt="login" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
