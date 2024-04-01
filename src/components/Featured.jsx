import React, { useState } from 'react'
import {motion} from "framer-motion"
import {Power4} from "gsap/all"
function Featured() {
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringRight, setIsHoveringRight] = useState(false)
  function handleHover() {
    alert("Hovered")
  }

  return (
    <div className='w-full py-20' >
      <div className='w-full px-20 border-b-2 pb-[3vw] border-[#D2D2D2] mb-10' >
        <h1 className='font-NS text-[3vw] capitalize font-bold tracking-tight ' >Featured Projects</h1>
        
      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10">
            
            <div  onMouseEnter={()=>setIsHovering(true)}  onMouseLeave={()=>setIsHovering(false)} className="card-container relative w-1/2 h-[75vh] ">
                <h1 className='flex text-[#CDEA68] font-semibold absolute z-[9] text-[7vw] overflow-hidden font-NS leading-none tracking-tighter left-full -translate-x-1/2 top-[35%]' >
                {"FYDE".split('').map((item, index)=><motion.span initial={{y:"100%"}} animate={isHovering ? ({y: "0"}): ({y: "100%"})} transition={{ease: Power4.easeInOut, delay:index*0.01}} className='inline-block translate-y-full' >{item}</motion.span>)}
                </h1>
                <div className='card w-full h-full rounded-[2vw] overflow-hidden' > 
                    <img className='w-full h-full ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div onMouseEnter={()=>setIsHoveringRight(true)}  onMouseLeave={()=>setIsHoveringRight(false)} className="card-container relative w-1/2 h-[75vh] ">
            <h1 className='flex overflow-hidden text-[#CDEA68] font-semibold absolute z-[9] text-[7vw] font-NS leading-none tracking-tighter right-full translate-x-1/2 top-[35%]' >
                {"VISE".split('').map((item, index)=><motion.span initial={{y:"100%"}} animate={isHoveringRight ? ({y: "0"}): ({y: "100%"})} transition={{ease: Power4.easeInOut, delay:index*0.01}} className='inline-block translate-y-full' >{item}</motion.span>)}
            </h1>

                <div className='card w-full h-full rounded-[2vw] overflow-hidden' >
                    <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
