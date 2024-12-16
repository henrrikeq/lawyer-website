import React from 'react'

const Case = () => {
  return (
    <div className='h-[100vh]'>
        <div className='flex flex-col items-center'>
            <p className='text-[#AFA939] text-[18px] font-extrabold'>Explore Case Studies</p>
            <p className='text-[2rem] text-[#494949] font-bold mb-12'>100+ Completed Case Successfully</p>
            <div className='flex gap-7'>
                <img src="./src/assets/images/case-1.jpg" alt="" className='h-[50vh] w-[25vw] object-cover'/>
                <img src="./src/assets/images/case-3.jpg" alt="" className='h-[50vh] w-[25vw] object-cover'/>
                <img src="./src/assets/images/case-2.jpg" alt="" className='h-[50vh] w-[25vw] object-cover'/>
            </div>
            <div>
                <p className='border-2 px-10 py-2 rounded-sm bg-[#AFA939] border-[#AFA939] text-white font-semibold mt-12'>See More Successfully Cases</p>
            </div> 
        </div>
    </div>
  )
}

export default Case;