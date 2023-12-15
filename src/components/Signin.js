import React from 'react';
import login from "../assests/login.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Signin = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-green-100">
          <div className="flex w-[70%] h-[80%] border-2 bg-white">
    
            <div className="flex justify-center items-center w-2/3">
              <div className="flex flex-col w-[400px] h-[500px] gap-y-10 items-center justify-center">
                <div className="text-green-900 font-bold text-xl">
                  SignIn
                </div>
                <div className="flex flex-col gap-y-8">
                  <input className="text-green-900 px-2 rounded-2xl h-[37px] w-[250px] border-2 font-semibold" placeholder="Email"/>
                  <input className="px-2 text-green-800 rounded-2xl h-[37px] w-[250px] font-medium border-2" placeholder="password"/>
                </div>
                <button className="text-green-900 border-2 px-10 rounded-3xl h-10 flex justify-center items-center w-48 bg-green-400">Login</button>
                <button className="text-green-900 flex justify-center items-center gap-x-2">
                  Create account
                  <FaLongArrowAltRight className="mt-1"/>
                  </button>
              </div>
            </div>
    
            <div className="flex justify-center items-center w-1/3 bg-green-500">
              <div className="">
                <img src={login} alt="login" />
              </div>
            </div>
    
          </div>
        </div>
      );
}

export default Signin