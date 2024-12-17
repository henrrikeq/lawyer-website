import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroMidpoint = window.innerHeight / 2; // Adjust based on your hero height
      if (window.scrollY > heroMidpoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar Container */}
      <div
        className={`w-full h-[4rem] flex justify-around items-center transition-all duration-500 ease-in-out transform ${
          isScrolled
            ? "fixed top-0 bg-white text-black shadow-lg z-50 translate-y-0"
            : "relative bg-transparent text-white translate-y-0"
        }`}
      >
        <p className="flex text-[18px] font-bold ml-40">PRO-ATTORNEY</p>
        <div className="flex gap-10 text-[15px] font-semibold ml-14">
          <p className="hover:text-[#AFA939]">Home</p>
          <p className="hover:text-[#AFA939]">About</p>
          <p className="hover:text-[#AFA939]">Attorneys</p>
          <p className="hover:text-[#AFA939]">Practice Areas</p>
          <p className="hover:text-[#AFA939]">Case Studies</p>
          <p className="hover:text-[#AFA939]">Blog</p>
          <p className="hover:text-[#AFA939]">Contact</p>
        </div>
        <button className="flex mr-32 border-2 px-4 py-2 font-semibold bg-[#AFA939] border-[#AFA939] text-white">
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
