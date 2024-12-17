import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-[#222831] h-[90vh]'>
            <div className='flex  text-white  justify-center pt-12'>
                <div className='w-[16rem] mr-5'>
                <p className='text-[2rem] font-extrabold mb-5 text-[#FFFFFF]'>Pro-Attorney</p>
                <p className='text-base mt-8 text-gray-400 font-semibold w-48'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='flex gap-5 mt-12'>
                    <p className='flex justify-center items-center text-[20px] border-2 w-9 h-9 rounded-full bg-[#2D333C] border-[#2D333C]'><FaTwitter /></p>
                    <p className='flex justify-center items-center text-[20px] border-2 w-9 h-9 rounded-full bg-[#2D333C] border-[#2D333C]'><FaFacebookF /></p>
                    <p className='flex justify-center items-center text-[20px] border-2 w-9 h-9 rounded-full bg-[#2D333C] border-[#2D333C]'><FaInstagram /></p>
                </div>
                </div>
                <div className='w-[15rem] ml-6'>
                    <p className='text-[20px] font-semibold mb-8 text-[#F2F2F3] pt-3'>Practice Areas</p>
                    <div className='font-semibold text-[#F2F2F3]'>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Family Law</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Business Law</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Insurance Law</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Criminal Law</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Drug Offenses</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Fire accident</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Employment Law</p>
                        </div>
                        <div className='flex gap-3 mb-3'>
                            <p className='text-[12px] pt-1.5'><FaChevronRight /></p>
                            <p>Property Law</p>
                        </div>
                    </div>

                </div>
                <div className='w-[13rem]'>
                    <p className='text-[20px] font-semibold mb-8 text-[#F2F2F3] pt-3'>Have a question</p>
                    <div>
                        <div className='flex gap-5 text-[#F2F2F3] mb-3'>
                            <p className='pt-1.5'><IoLocationSharp /></p>
                            <p className='text-gray-400 font-semibold'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className='flex gap-5 text-[#F2F2F3] font-semibold mb-3'>
                            <p className='pt-1.5'><BsTelephoneFill /></p>
                            <p>+2 392 3929 210</p>
                        </div>
                        <div className='flex gap-5 text-[#F2F2F3] font-semibold mt-5'>
                            <p className='pt-1 text-[18px]'><IoIosMail /></p>
                            <p>	info@yourdomain.com</p>
                        </div>
                    </div>
                </div>
                <div className='w-[15rem] ml-10'>
                    <p className='text-[20px] font-semibold mb-8 text-[#F2F2F3] pt-3 '>Business Hours</p>
                    <p className='text-[#AFA939] mb-3'>Opening Days:</p>
                    <p className='font-semibold'>Monday - Fridays: 9am to 20pm</p>
                    <p className='font-semibold'>Saturday: 9am-17pm</p>
                </div>
            </div>
            <div className="mt-12 text-center text-gray-300 text-md font-semibold">
          Copyright&copy;{new Date().getFullYear()} ProAttorney. All Rights Reserved.
        </div>
        </div>
    )
}

export default Footer;