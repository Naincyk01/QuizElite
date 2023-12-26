import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Start = () => {

  const currentusername = useSelector(store => store.signData.currentUser);
  return (
     <div className='bg-green-100 flex h-screen w-full justify-center items-center flex-col'>
     <div className='flex justify-center flex-col items-center font-extrabold'>
      <div className='text-6xl'>WELCOME</div>
      <div className='text-4xl capitalize tracking-wider'>{currentusername.name}</div>
     </div>
     <Link to="/ques">Start the Quiz</Link>
      </div>
  )
}

export default Start