import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroMidpoint = window.innerHeight / 2; // Adjust as needed
      if (window.scrollY > heroMidpoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`flex justify-around h-[4rem] items-center transition-all duration-500 transform ${
          isScrolled
            ? 'fixed top-0 w-full bg-black shadow-lg z-50 translate-y-0'
            : 'absolute top-8 w-full bg-transparent -translate-y-full'
        }`}
      >
        <p className='flex text-[18px] font-bold ml-40 text-white'>LEGALCARE</p>
        <div className='flex gap-10 text-[15px] font-semibold ml-14 text-white'>
          <p className='hover:text-[#AFA939]'>Home</p>
          <p className='hover:text-[#AFA939]'>About</p>
          <p className='hover:text-[#AFA939]'>Attorneys</p>
          <p className='hover:text-[#AFA939]'>Practice Areas</p>
          <p className='hover:text-[#AFA939]'>Case Studies</p>
          <p className='hover:text-[#AFA939]'>Blog</p>
          <p className='hover:text-[#AFA939]'>Contact</p>
        </div>
        <button className='flex mr-32 border-2 px-4 py-2 font-semibold bg-[#AFA939] border-[#AFA939] text-white'>
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
