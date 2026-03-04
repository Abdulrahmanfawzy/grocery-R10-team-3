import React from 'react'

const Recovery = () => {
  return (
    <div  className='flex flex-col items-center justify-center py-70px min-h-screen'>
    <h1>password Recovery</h1>

    <p>Enter your Mobile number to Recovery</p>
        
    <input className='w-60 bg-gray-200 text-gray-800 py-2 rounded  '
        type='text' placeholder=' your email'></input>
       
        
        <button className='bg-blue-500  text-white text-lg font-bold  h-70px   p-4 mt-1  '>verify</button>

    




    </div>
  )
}

export default Recovery