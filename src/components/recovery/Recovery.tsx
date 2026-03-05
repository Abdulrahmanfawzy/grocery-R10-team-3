import React from 'react'
import { Link } from 'react-router-dom'
const Recovery = () => {
  return (
    <div  className='flex flex-col items-center justify-center py-70px min-h-screen'>
    <h1>password Recovery</h1>

    <p>Enter your Mobile number to Recovery</p>
        
    <input className='w-60 bg-gray-200 text-gray-800 py-3 rounded  '
        type='text' placeholder=' your email'></input>
       
      <Link to='/verification' className=''> 
        <button className='w-60 cursor-pointer bg-[#014262] text-white text-lg font-bold  h-70px   py-4 mt-1  '>verify</button>

    </Link>




    </div>
  )
}

export default Recovery