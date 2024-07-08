import React from 'react'

function Marquee() {
  return (
    <div className='bg-[#004D43] w-full h-[31vw] rounded-t-2xl'>
        <div className='marquee uppercase absolute border-t-[1px] border-b-[1px] border-zinc-400  w-full h-[20.2vw] mt-[7vw]' >
            
            <marquee  scrollamount="15"   className='absolute font-[Grotesk] text-[28vw] h-[23vw] leading-[17vw]'>WE ARE OCHI WE ARE OCHI WE ARE OCHI WE ARE OCHI WE ARE OCHI WE ARE OCHI WE ARE OCHI WE ARE OCHI</marquee>
        </div>
    </div>
  )
}

export default Marquee