import React from 'react'
import {Link} from 'react-router-dom'
const Account = () => {
  return (
    <div className='flex flex-col items-center justify-center py-70px min-h-screen'>

  <h1>create your account!</h1>
        <p>enter your full Details</p>
       <div className='flex '
       ><input className='  h-70px border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
        type='text' placeholder='username'></input></div>
       <div> <input className='h-70px border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
        type='text' placeholder='email'></input></div>
        <Link to='/choose' className='bg-blue-500  text-white text-lg font-bold  h-70px   p-4 mt-1 '> <button className='bg-blue-500  text-white text-lg font-bold  h-70px   p-4 mt-1 '>continue</button>
     </Link>


        <p> sign up with </p>
        <div className='flex'>
        <i className="fa-brands fa-google"></i>
        <label> sign with google</label>

    <i className="fa-brands fa-facebook"></i>
     <label>sign with facebook</label>
</div>






    </div>
  )
}

export default Account