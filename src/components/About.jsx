import React from 'react'

function About() {
  return (
    <div  data-scroll data-scroll-speed="-.1"  className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black' >
      <h1 className='font-NS text-[4vw] leading-[4.5vw] tracking-tight' >Ochi is a strategic partner for fast-growinng tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full border-t-[3px] mt-[6vw] border-[#76834a] flex' >
        <div className=' w-1/2 ' >
            <h1 className='font-NS text-[2vw] pl-[1.5vw] pt-[4vw] '>Our Approach</h1>
            <button className=' bg-black text-white px-[2vw] py-[1vw] rounded-full md:px-[6vw] hover:bg-white hover:text-black hover:font-bold flex gap-[3vw] items-center uppercase  ' >Read More
            <div className=' w-2 h-2 bg-white rounded-full hover:bg-black hover:rounded-full ' >
            </div>
            </button> 
        </div>
        <div className=' w-1/2 h-[70vh]' >
          <img className='bg-cover bg-center rounded-3xl mt-[2.5vw]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About