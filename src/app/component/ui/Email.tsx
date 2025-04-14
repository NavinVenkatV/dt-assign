import React from 'react'

function Email() {
  return (
    <div className='flex gap-2 pl-5 bg-black w-[380px] rounded-lg'>
      <input type="text" className='p-2 focus:outline-none w-auto' placeholder='Enter your email'/>
      <button className='px-3 py-1 cursor-pointer bg-green-600 text-white m-1 rounded-lg'>Schedule a demo</button>
    </div>
  )
}

export default Email
