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
          <div className="flex w-[70%] h-[80%] border-2 bg-white max-lg:w-full max-lg:mx-12 max-md:flex-col 
      max-md:items-center max-md:justify-center max-sm:mx-4 max-md:h-[95%] max-md:py-12">
    

          <div className="flex justify-center items-center w-1/2 max-md:w-full">
              <div className="bg-green-500 rounded-full w-80 h-80">
                <img src={login} alt="login" />
              </div>
            </div>
    

            <div className="flex justify-center items-center w-1/2 max-md:w-full">
              <div className="flex flex-col w-[400px] h-[500px] gap-y-10 items-center justify-center">
                <div className="text-green-900 text-2xl font-extrabold">
                  SignIn
                </div>
                {isSignedUp!==false && name!==null && password!==null ? (
                <div className='w-full flex flex-col justify-center items-center h-[100px] gap-y-3'>
                 <div className='text-green-900 text-xl font-semibold'>Your account has been created</div>
                  <div className='text-green-900 text-xl font-semibold'>Login to start{'\u00A0'}{'\u00A0'}</div>
              <Link to="/" className='text-green-900 text-2xl border w-12 text-center rounded-md bg-green-200'>→</Link>{'\u00A0'}
            </div>) : (null)}
                <div className={`flex flex-col gap-y-8 ${visibility}`}>
                  <input className="text-green-900 px-2 rounded-full h-[46px] w-[250px] bg-gray-100 font-semibold" placeholder="Email/Username"
                   onChange={(e)=>setName(e.target.value)}/>
                  <input className="px-2 text-green-900 rounded-full h-[46px] w-[250px] bg-gray-100 font-semibold" placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className={`text-green-900 border-2 px-10 rounded-3xl h-12 flex justify-center items-center w-52 bg-green-400 font-semibold text-xl ${visibility}`}
                 onClick = {()=> {handleLoginDetails()
                  if(name!==null && password!==null){
                    setIsSignedUp(true) 
                    setText('login')
                    setVisibility('hidden')
                }
                }}>{text}</button> 
              </div>
            </div>
{/*     
            <div className="flex justify-center items-center w-1/3 bg-green-500">
              <div className="">
                <img src={login} alt="login" />
              </div>
            </div> */}
    
          </div>
        </div>
      );
}

export default Signin