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
    <div className={`bg-green-950 h-auto overflow-hidden w-full ${pt.className}`}>
      <div className='p-2 md:px-44 md:py-5 md:flex justify-between'>
        <div>
          <div>SMS sendig App - assignment</div>
          <div className='text-3xl text-center md:text-left md:text-7xl text-white mt-28'>Know your customers, grow your business.</div>
          <p className='text-center md:text-left text-sm md:text-lg max-w-[500px] mt-2 md:mt-10 text-neutral-400'>Get Instant SMS and grow your Business</p>
          <div className='mt-10'>
            <Email />
          </div>
          <div className='mt-5'>
            <Hori />
          </div>
        </div>
        <div className='relative w-full h-auto mt-4 md:mt-0 md:w-[600px] md:h-[800px]'>
          <img 
            src="/image.png" 
            alt="Business illustration" 
            className='w-full h-auto md:w-full md:h-[650px] rounded-xl mb-10 object-cover' 
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
