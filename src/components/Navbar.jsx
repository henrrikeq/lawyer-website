import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroMidpoint = window.innerHeight / 2;
      if (window.scrollY > heroMidpoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine the currently active section
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
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
          <a
            href="#home"
            className={`hover:text-[#AFA939] ${
              activeSection === "home" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-[#AFA939] ${
              activeSection === "about" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            About
          </a>
          <a
            href="#attorneys"
            className={`hover:text-[#AFA939] ${
              activeSection === "attorneys" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            Attorneys
          </a>
          <a
            href="#services"
            className={`hover:text-[#AFA939] ${
              activeSection === "services" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            Practice Areas
          </a>
          <a
            href="#case-studies"
            className={`hover:text-[#AFA939] ${
              activeSection === "case-studies" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            Case Studies
          </a>
          <a
            href="#blog"
            className={`hover:text-[#AFA939] ${
              activeSection === "blog" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            Blog
          </a>
          <a
            href="#contact"
            className={`hover:text-[#AFA939] ${
              activeSection === "contact" ? "border-b-2 border-[#AFA939]" : ""
            }`}
          >
            Contact
          </a>
        </div>
        <button className="flex mr-32 border-2 px-4 py-2 font-semibold bg-[#AFA939] border-[#AFA939] text-white">
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
