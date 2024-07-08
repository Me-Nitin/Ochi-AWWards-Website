import React from 'react'

function Greencard() {
  return (
    <div className='rounded-2xl  bg-[#CDEA68] w-full text-zinc-800 font-["Neue_Montreal"]'>
      <h1 className='text-[3.6vw] px-[6vw] pt-[6vw] leading-[3.6vw] mr-[10vw] ml-[-2vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas,<span className='text-zinc-100'> and hire great people.</span></h1>
      <div  className='flex mt-[5vw] border-t-[0.15vw] border-[#7e903f] pt-[1vw] pb-[3vw] px-[3.8vw] w-full'>
        <div className='w-1/2 '>
          <h1 className='text-[3.6vw]'>Our Approach:</h1>
          <button className='uppercase flex items-center content-center mt-[1vw] gap-[2.8vw] bg-black text-zinc-200 rounded-full px-[1.5vw] py-[1.2vw]'>
            <div>Read More</div>
            <div className='rounded-full h-[0.8vw] w-[0.8vw] bg-white '></div>
            </button>
          </div>
          <div className='bg-[#88994a] w-1/2 rounded-2xl h-[68vh] '><img className='h-[68vh] rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default Greencard