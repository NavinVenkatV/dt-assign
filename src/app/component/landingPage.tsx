import React from 'react'
import { PT_Serif } from "next/font/google"
import Email from './ui/Email'
import Hori from './Hori'
import { motion } from 'framer-motion'

const pt = PT_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

function LandingPage() {
  return (
    <div className={`bg-green-950 h-full overflow-hidden w-full ${pt.className}`}>
      <div className='px-44 py-5 flex justify-between'>
        <div>
          <div>Navigation Bar</div>
          <div className='text-7xl text-white mt-28'>Know your customers, grow your business.</div>
          <p className='max-w-[500px] mt-10 text-neutral-400'>Vergé helps you track, analyze, and understand your customers with real-time insights to boost retention and revenue.</p>
          <div className='mt-10'>
            <Email />
          </div>
          <div className='mt-5'>
            <Hori/>
          </div>
        </div>
        <div className='relative w-[600px] h-[800px]'>
          <img src="/image.png" alt="Business illustration" className='w-full h-[650px] rounded-xl mb-10 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
