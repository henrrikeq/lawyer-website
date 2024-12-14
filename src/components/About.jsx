import React from 'react';
import { PiBuildingOffice } from "react-icons/pi";

const About = () => {
    const cardData = [
        {
            icon: <PiBuildingOffice />, 
            title: "Fight for Justice", 
            description: "Seeking justice in the world is a significant emotional and investment when we follow this call."
        },
        {
            icon: <PiBuildingOffice />, 
            title: "Build Strong Cases", 
            description: "We prepare strong cases by gathering all the necessary information and presenting it convincingly."
        },
        {
            icon: <PiBuildingOffice />, 
            title: "Expert Legal Advice", 
            description: "Our team provides expert legal advice to help you navigate complex legal challenges with ease."
        }
    ];

    return (
        <div className='w-full min-h-screen'>
            <div className='flex flex-col md:flex-row'>
                {/* Left Section */}
                <div className='w-full md:w-1/3 pl-48 pt-12'>
                    <p className='text-[#AFA939] text-sm font-extrabold'>Services</p>
                    <p className='text-2xl font-bold mt-2'>Why Select Us?</p>
                    <p className='text-base mt-5 text-gray-400 font-semibold w-11/12'>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your.
                    </p>
                    <button className='border-2 px-4 py-3 text-white bg-[#AFA939] border-[#AFA939] mt-4 rounded-sm font-semibold'>
                        Free Consultation
                    </button>
                </div>

                {/* Right Section */}
                <div className='w-full md:w-2/3 flex flex-col'>
                    {/* Top Bar */}
                    <div className='border-2 bg-[#AFA939] border-[#AFA939] h-32 w-[56vw]'></div>

                    {/* Card Section */}
                    <div className='flex flex-wrap gap-2'>
                        {cardData.map((card, index) => (
                            <div key={index} className='flex flex-col items-center border-2 h-80 w-56 bg-white border-white shadow-md rounded-md -mt-16 ml-5 p-4'>
                                <p className='text-[30px] mt-4 border-2 px-5 py-5 bg-[#F2F2F2] border-[#F2F2F2] rounded-full font-bold mb-3 text-[#AFA939]'>
                                    {card.icon}
                                </p>
                                <p className='text-[18px] font-semibold mb-2'>{card.title}</p>
                                <p className='w-44 text-center text-gray-400'>
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
