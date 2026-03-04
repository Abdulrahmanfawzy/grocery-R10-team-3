import React from 'react'
import {Link} from 'react-router-dom'
const autho = () => {
  return (
   
    <div  className=' flex flex-col items-center justify-center min-h-screen'>  
        <h1>login your account!</h1>
        <p>welcome to Gorcy Plus</p>
      
       <div className='flex flex-col items-center justify-center  mt-6 w-full  max-w-[350px] max-w-sm gap-y-4  mt-6'>
        <input 
        type='text' placeholder='enter your email' 
        className='w-full border border-gray-300 bg-gray-200 text-gray-800 rounded-lg  p-7  rounded ' />

         <input 
        type='text' placeholder='enter your password' 
        className="w-full border border-gray-300 bg-gray-200 text-gray-800 rounded-lg  py-7 rounded " />

        
           
  <Link to='/Account' className='w-full  p-7'> 
 <button className='w-full cursor-pointer bg-[#014262]  bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-transparent transition duration-300'>continue</button></Link>
      
</div>


        <p> contact with me</p>
        <div className='flex'>
        <i class="fa-brands fa-google"></i>
        <label>continue with google</label>

    <i class="fa-brands fa-facebook"></i>
     <label>continue with facebook</label>
</div>

        <p>dont have account?</p>
         <Link to='/Account' className='bg- cursor-pointer text-white text-lg font-bold  h-70px   py-4 mt-1 '>sign up 
</Link>



















    </div>
  )
}

export default autho
