import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Ques1 = () => {
  const correct = useSelector(store =>store.quesDetails.ques1);
  const dispatch = useDispatch();
  const handleclick=(data)=>{
 if(correct==data){
  console.log("rightjbhjbvhj");
}
  };
  return (
    <div className='text-white flex flex-col justify-center items-center h-full w-screen gap-y-6'>
      <div className='text-4xl'> Which country has the highest life expectancy?</div>
      <div className='flex flex-col text-2xl'>
      <Link to="/ques/ques2" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(1)}>Hong Kong</Link>
      <Link to="/ques/ques2" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(2)}>USA</Link>
      <Link to="/ques/ques2" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(3)}>India</Link>
      <Link to="/ques/ques2" className='border-2 border-purple-800 px-2 m-2 bg-purple-500 rounded-md h-10' onClick={()=>handleclick(4)}>Canada</Link>
      </div>
    </div>
  )
}

export default Ques1