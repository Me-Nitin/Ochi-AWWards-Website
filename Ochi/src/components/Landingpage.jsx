import React from 'react'
import { GoArrowUpRight } from "react-icons/go"

function Landingpage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-[1vw]'>
        <div className="text mt-[9vw] px-[3.5vw]">
          {[" We Create","Eye-Opening","presentations"].map((text,index)=>{
            return(
              
              <div className="masker uppercase text-[9vw] leading-[6.5vw] tracking-normal font-['Grotesk'] font-light ">
                <div className='imag flex content-center'>
                  {index===1 && (<div className='bg-red-600 h-[5.6vw] w-[9vw] mt-[1vw] relative rounded-lg mr-[1vw]'></div>)}
                <h1>
                {text}
            </h1></div>
                
            </div>
            )
          })}
        </div>
<div className='border-t-2 text-[1.1vw] border-zinc-800 mt-[7vw] pt-[0.8vw] font-["Neue Montreal"] flex justify-between items-center px-[3.5vw] '>
  {["For public and private companies","From the first pitch to IPO"].map((text,index)=>(
    <p className=' leading-none tracking-tight font-light'>{text}</p>
))}
<div className="start flex content-between gap-2">
  <div className='rounded-full leading-none tracking-tight font-light border-[2px] px-4 pt-1.5 uppercase border-zinc-500'>Start the project</div>
  <div className='rounded-full border-[2px] h-9 w-9  border-zinc-500  flex content-center items-center pl-1'><GoArrowUpRight className='size-6' /></div>
</div>
</div>

    </div>
  )
}

export default Landingpage