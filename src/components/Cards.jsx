import React from 'react'

function Cards() {
  return (
    <div data-scroll data0scroll-speed="-.3"  className=' w-full h-screen border-t-[3px]  border-zinc-700 py-20 flex items-center gap-[2vw] px-32'>
      <div className="cardContainer w-1/2 h-[60vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-[1.5vw] flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  alt="" />
            <button className='absolute left-10 bottom-10 border-[#B5D864] px-2 border-2 rounded-full text-[#B5D864]' >&copy;2019-2022</button>
        </div>
      </div>
      <div className="cardContainer w-1/2 h-[60vh] flex gap-5">
      <div className=" relative card w-1/2 h-full  bg-[#212121] rounded-[1.5vw] flex justify-center items-center ">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-10 bottom-10 border-[white] px-2 border-2 rounded-full text-[white] hover:bg-white hover:text-black uppercase'>Rating 5.0 on clutch</button>
      </div>
      <div className="relative card w-1/2 h-full bg-[#212121] rounded-[1.5vw] flex justify-center items-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-10 bottom-10 border-[white] px-2 border-2 rounded-full text-[white] hover:bg-white hover:text-black uppercase' >Business Bootcamp Alumni</button>
      </div>
      </div>
      
    </div>
  )
}
export default Cards
