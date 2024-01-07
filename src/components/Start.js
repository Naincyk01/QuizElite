import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Start = () => {
  const currentusername = useSelector((store) => store.signData.currentUser);
  return (
    <div className="bg-purple-100 flex h-screen w-full justify-center items-center">
      <div className="flex h-[80%] w-[70%] justify-center items-center flex-col bg-white border-2 border-purple-200 max-lg:w-full max-lg:mx-12">
       
        
          <div className="text-6xl flex max-sm:text-[2.8rem] text-purple-900 font-bold">
            WELCOME
          </div>
          <div className="text-4xl capitalize tracking-wider text-purple-900 font-bold">
            {currentusername.name}
          </div>
          <Link to="/ques/ques1" className="text-purple-900 font-bold text-3xl">
            Start the Quiz💡
          </Link>

        </div>
    </div>
  );
};

export default Start;
