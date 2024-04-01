import React from 'react';
import {motion} from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  

  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-white pt-1'>
      <div className='text-structure mt-52 px-20 uppercase'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return (    <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.83, 0, 0.17, 1], duration:2}} className='w-[6.5vw] mr-[1vw] rounded-md h-[4.2vw] relative mt-[3px] ml-[2px] ' >
                          <img className='rounded-[1vw] bg-cover bg-center object-cover ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /> </motion.div>)}
                                <h1 className='font-RM text-[6.5vw] py-[5px] -mb-[1vw] uppercase  leading-[5.9vw] tracking-wider font-semibold'>{item}</h1>

                    </div>
                            </div>)
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-[6px] px-[20px]'>
        {["For Public and Private Companies", "From the First Pitch to IPO"].map((item, index)=>{
            return (
                <p className='text-md tracking-tight leading-none text-zinc-900 font-bold' >{item}</p>
            )
        })}
        <div className='start flex items-center justify-center gap-5' >
            <div className='px-4 py-2 border-[3px] bg-black text-white border-zinc-100 rounded-full hover:text-black hover:bg-[#eea4b0] hover:font-normal capitalize' >Start The Project</div>
            <div className='w-3 h-3 rouded-full border-zinc-100 rounded-full  hover:bg-white  hover:text-[red] hover:font-normal capitalize' >
                <span className='rotate-45' >
                    <FaArrowUpLong />
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
