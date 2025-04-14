'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { PT_Serif } from "next/font/google"
import Send from '../component/send'
import History from '../component/History'
import { useRouter } from 'next/navigation'

const pt = PT_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function ClientPage() {
    const router = useRouter();
  const [showSend, setSend] = useState(false)
  const [history, setHistory] = useState(false)

  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const no = searchParams.get('number')

  return (
    <div className={`bg-[#f8f4ec] h-screen relative p-2 z-0 text-black w-full ${pt.className} py-10`}>
        <div onClick={()=>{
            router.push('/')
        }} className='mx-3'>
              <div className='transition-all hover:-translate-y-0.5 duration-300 ease-in-out rounded-full text-center py-2 cursor-pointer bg-green-800 text-white w-[100px]'>
                Home
              </div>
            </div>
      <div className='text-center'>
      <div className='text-center text-3xl mt-10 md:text-5xl'>Customer data made simple.</div>
      <div className='flex justify-center w-full'>
          <div onClick={() => setHistory(true)} className='mt-4 md:mt-10'>
            <div className='transition-all hover:-translate-y-0.5 duration-300 ease-in-out rounded-full text-center py-2 cursor-pointer bg-green-800 text-white w-[200px]'>
              Message History
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-5'>
        <div className='bg-black w-[1000px] h-[300px] rounded-xl text-white py-10 px-5'>
          <div className='flex flex-col items-center'>
            <p className='text-2xl md:text-4xl text-green-700'>Contact Details:</p>
            <div className='mt-5 text-md md:text-xl flex flex-col'>
              <p>Name: <span className='text-neutral-400'>{name}</span></p>
              <p>Number: <span className='text-neutral-400'>{no}</span></p>
            </div>
            <div onClick={() => setSend(true)} className='mt-10'>
              <div className='transition-all hover:-translate-y-0.5 duration-300 ease-in-out rounded-full text-center py-2 cursor-pointer bg-green-800 text-white w-[200px]'>
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSend && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-opacity-50">
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <button onClick={() => setSend(false)} className="absolute top-2 z-50 cursor-pointer right-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              ✖
            </button>
            <Send setSend={setSend} number={no} />
          </div>
        </div>
      )}

      {history && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-opacity-50">
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <button onClick={() => setHistory(false)} className="absolute top-2 z-50 cursor-pointer right-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              ✖
            </button>
            <History />
          </div>
        </div>
      )}
    </div>
  )
}
