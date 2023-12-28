import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseCount } from '../utils/ScoreSlice';

const Ques2 = () => {
  const correct = useSelector(store =>store.quesDetails.ques2);
  const dispatch = useDispatch();
  const handleclick=(data)=>{
 if(correct==data){
  dispatch(increaseCount());
}
  };
  return (
    <div className='text-white flex flex-col justify-center items-center h-full w-screen gap-y-6'>
      <div className='text-4xl'>In which of the following state, the main language is Khasi?</div>
      <div className='flex flex-col text-2xl'>
      <Link to="/ques/ques3" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(1)}>Mizoram</Link>
      <Link to="/ques/ques3" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(2)}>Nagaland</Link>
      <Link to="/ques/ques3" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(3)}>Meghalaya</Link>
      <Link to="/ques/ques3" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(4)}>Tripura</Link>
      </div>
    </div>
  )
}

export default Ques2