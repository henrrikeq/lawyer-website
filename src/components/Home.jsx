import React from 'react'
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
        <div className='img'>
            <Navbar />
            <div className='w-[40%] flex flex-col m-20 ml-44'>
                <p className='text-[#AFA939] text-[14px] font-extrabold'>WELCOME TO PRO-ATTORNEY</p>
                <p className='text-white text-[3rem] font-bold'>Attorneys Fighting For Your Custody</p>
                <p className=' text-[18px] w-[32rem] mt-2 text-[#969696] font-semibold'>We have help thousands of people to get relief from national wide fights wrongfull denials. Now they trusted legalcare attorneys</p>
                <div className='flex border-2 px-5 py-1 text-white font-semibold bg-[#AFA939] border-[#AFA939] w-[12rem] rounded-sm mt-4'>
                <p >Get Legal Advice</p>
                <p>..</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;