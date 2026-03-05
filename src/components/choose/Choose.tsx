import React from 'react'
import {Link} from 'react-router-dom'
const Choose = () => {
  return (
    <div className='flex flex-col items-center justify-center py-70px min-h-screen'
    ><h1>Choose an account</h1>

 <Link to='/recovery' className='bg-[#014262]  text-white text-lg font-bold  h-70px   py-4 mt-1 '> <button className='bg-blue-500  text-white text-lg font-bold  h-70px   p-4 mt-1 '>continue</button>
     </Link>

<div className='flex items-center cursor-pointer bg-gray-200 text-gray-800 py-3 rounded'>
  
  
       <i className="fa-brands fa-google text-blue-500    "></i>  
       <p>Account name</p>
      
</div>
<br></br>
<div className='flex  items-center  cursor-pointer bg-gray-200 text-gray-800 py-3 rounded'>

    <i  className="fa-solid fa-user"></i>
    <p >use another account</p>
    
</div>



    </div>
  )
}

export default Choose