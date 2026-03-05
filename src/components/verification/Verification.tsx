import React from 'react'

const verification = () => {
  return (
    <div className='flex flex-col gap 10 bg-gray '> 

   <h1>
    Enter  verification code
    
   </h1>

<p>we send acode</p>
<input className='w-45 gap 10' type="text" />
<input type="text" />
<input type="text" />
<input type="text" />
<input type="text" />
<input type="text" />

<p>resend code</p>

 <button className='w-60 cursor-pointer bg-[#014262] text-white text-lg font-bold  h-70px   py-4 mt-1  '>verify</button>






    </div>
  )
}

export default verification