import React from 'react'
import { useSelector } from 'react-redux';

const Start = () => {

  const currentusername = useSelector(store => store.signData.currentUser);
  return (
     <div className='bg-green-100 flex h-screen w-full justify-center items-center'>
     <div className='flex justify-center'>
      <div>WELCOME</div>
      <div>{" " + currentusername.name}</div>
     </div>
      </div>
  )
}

export default Start