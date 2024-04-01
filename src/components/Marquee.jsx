import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div  data-scroll data-section data-scroll-speed=".1" className='w-full pt-20 pb-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl text-white' >
      <div className='text border-t-2 border-b-2 border-zinc-300  overflow-hidden flex whitespace-nowrap p-10 '>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration: 10}}  className='text-[22vw] pr-20 leading-none font-TAJ font-semibold uppercase  -mb-[3vw]' >We Are Ochi</motion.h1>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration: 10}}  className='text-[22vw] pr-20 leading-none font-TAJ font-semibold uppercase  -mb-[3vw]' >We Are Ochi</motion.h1>

      </div>
    </div>
  )
}

export default Marquee
