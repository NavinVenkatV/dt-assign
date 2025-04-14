import React from 'react'

function Email() {
  return (
    <div className='flex justify-between pl-3 md:pl-5 bg-black w-auto  md:w-[380px] rounded-lg'>
      <input type="text" className='p-2 focus:outline-none w-auto' placeholder='Enter your email'/>
      <button className=' px-2 md:px-3 py-1 cursor-pointer bg-green-600 text-white m-1 rounded-lg'>Schedule</button>
    </div>
  )
}

export default Email
