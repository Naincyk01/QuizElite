import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseCount } from '../utils/ScoreSlice';

const Ques4 = () => {
  const correct = useSelector(store =>store.quesDetails.ques3);
  const dispatch = useDispatch();
  const handleclick=(data)=>{
 if(correct==data){
  dispatch(increaseCount());
}
  };
  return (
    <div className='text-white flex flex-col justify-center items-center h-full w-screen gap-y-6'>
      <div className='text-4xl'>Which state has the largest area?</div>
      <div className='flex flex-col text-2xl'>
      <Link to="/ques/ques5" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(1)}>Maharashtra</Link>
      <Link to="/ques/ques5" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(2)}>Madhya Pradesh</Link>
      <Link to="/ques/ques5" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(3)}>Uttar Pradesh</Link>
      <Link to="/ques/ques5" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(4)}>Rajasthan</Link>
      </div>
    </div>
  )
}

export default Ques4