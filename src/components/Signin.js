import React from 'react';
import login from "../assests/login.png";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { storeDetails } from '../utils/SignSlice';
import { Link } from 'react-router-dom';


const Signin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [visibility, setVisibility] = useState('visible');
  const [text, setText] = useState('SIGN IN')

  const handleLoginDetails = () => {
    dispatch(storeDetails({name,password}))
}

    return (
        <div className="h-screen flex justify-center items-center bg-green-100">
          <div className="flex w-[70%] h-[80%] border-2 bg-white">
    
            <div className="flex justify-center items-center w-2/3">
              <div className="flex flex-col w-[400px] h-[500px] gap-y-10 items-center justify-center">
                <div className="text-green-900 font-bold text-xl">
                  SignIn
                </div>
                {isSignedUp!==false && name!==null && password!==null ? (<div className='w-full flex justify-center items-center h-9'>
                 Your account has been created{'\u00A0'}
              <Link to="/" className='text-black'>Login</Link>{'\u00A0'}
              to start
            </div>) : (null)}
                <div className={`flex flex-col gap-y-8 ${visibility}`}>
                  <input className="text-green-900 px-2 rounded-2xl h-[37px] w-[250px] border-2 font-semibold" placeholder="Email/Username"
                   onChange={(e)=>setName(e.target.value)}/>
                  <input className="px-2 text-green-800 rounded-2xl h-[37px] w-[250px] font-medium border-2" placeholder="password"
                  onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className={`text-green-900 border-2 px-10 rounded-3xl h-10 flex justify-center items-center w-48 bg-green-400 ${visibility}`}
                 onClick = {()=> {handleLoginDetails()
                  if(name!==null && password!==null){
                    setIsSignedUp(true) 
                    setText('login')
                    setVisibility('hidden')
                }
                }}>{text}</button> 
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