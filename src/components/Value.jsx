

import { useState } from "react";

const Value = () => {
  const content = {
    mission: "Our mission is to provide top-notch legal care and ensure justice for all our clients with integrity and professionalism.",
    vision: "Our vision is to be the leading legal care provider globally, setting standards of excellence in advocacy and service.",
    value: "Our values are rooted in transparency, commitment, and unwavering dedication to achieving justice for our clients."
  };

  const [activeText, setActiveText] = useState(content.mission); // Default text is "Our Mission"
  const [activeButton, setActiveButton] = useState("mission"); // Tracks which button is active

  return (
    <div className="flex flex-col md:flex-row h-[120vh]">
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start w-full lg:w-auto ml-44">
        <img
          src="./src/assets/images/about.jpg"
          alt="Henrrike Quarshie"
          className="h-[60vh] lg:h-[100vh] w-[37vw] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-[38%] px-4 m-8 ">
        <p className="text-[#AFA939] text-[16px] font-extrabold mb-3">
          Welcome to Pro-Attorney
        </p>
        <p className="text-[1.8rem] font-bold mb-5 text-[#494949]">
          We Always Fight For Your Justice to Win
        </p>

        {/* Buttons */}
        <div className="space-x-2 my-4 text-[#494949]">
          <button
            className={`border-[0.5px] px-7 py-2 rounded font-bold ${
              activeButton === "mission" ? "bg-[#AFA939] border-[#AFA939] text-white" : ""
            }`}
            onClick={() => {
              setActiveText(content.mission);
              setActiveButton("mission");
            }}
          >
            Our Mission
          </button>
          <button
            className={`border-[0.5px] px-7 py-2 rounded font-bold ${
              activeButton === "vision" ? "bg-[#AFA939] border-[#AFA939] text-white" : ""
            }`}
            onClick={() => {
              setActiveText(content.vision);
              setActiveButton("vision");
            }}
          >
            Our Vision
          </button>
          <button
            className={`border-[0.5px] px-8 py-2 rounded font-bold ${
              activeButton === "value" ? "bg-[#AFA939] border-[#AFA939] text-white" : ""
            }`}
            onClick={() => {
              setActiveText(content.value);
              setActiveButton("value");
            }}
          >
            Our Value
          </button>
        </div>

        {/* Displayed Text */}
        <div className="mb-4 border-[0.5px] w-[33vw] h-[27vh] rounded-md bg-[#F8F9FA] text-gray-500 font-semibold">
          <p className="m-5">{activeText}</p>
        </div>

        {/* Experience Text */}
        <div>
          <p className="font-semibold text-[20px] border-2 py-4 w-[60%] flex justify-center mt-20 -ml-12 bg-[#AFA939] border-[#AFA939] text-white">
            40 Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
