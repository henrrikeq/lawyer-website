

import React from "react";

const Attorneys = () => {
  const attorneys = [
    {
      name: "Ryan Anderson",
      practice: "Family Law",
      summary: "Ryan is an expert in family law, including custody and divorce cases.",
      image: "./src/assets/images/person_1.jpg",
    },
    {
      name: "Greg Washer",
      practice: "Corporate Law",
      summary: "Greg advises businesses on corporate legal matters and compliance.",
      image: "./src/assets/images/person_2.jpg",
    },
    {
      name: "Tony Henderson",
      practice: "Real Estate Law",
      summary: "Tony handles property disputes, acquisitions, and real estate contracts.",
      image: "./src/assets/images/person_3.jpg",
    },
    {
      name: "Michael Smith",
      practice: "Intellectual Property",
      summary: "Michael protects clients' intellectual property rights across industries.",
      image: "./src/assets/images/person_4.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }} className="flex flex-col h-[120vh]">
      {/* Section Header */}
      <div style={{ marginBottom: "20px" }}>
        <p className='text-[#AFA939] text-[18px] font-extrabold'>Our Attorneys</p>
        <p className='text-[2rem] text-[#494949] font-bold mb-12'>Meet Our Legal Experts</p>
      </div>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {attorneys.map((attorney, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              height: "400px",
              perspective: "1000px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
              }}
              className="card-inner"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(180deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg)";
              }}
            >
              {/* Card Front */}
              <div
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#76ed96",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // Moves content to the bottom
    alignItems: "flex-start", // Aligns content to the left
    padding: "10px", // Adds space around the content
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }}
  className="bg-[#69db88]"
>
  <h3
    style={{ fontSize: "20px", fontWeight: "bold" }}
    className="text-white"
  >
    {attorney.name}
  </h3>
  <p style={{ fontSize: "14px", color: "white" }}>
    {attorney.practice}
  </p>
</div>


              {/* Card Back */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  backgroundColor: "#afa939",
                  color: "white",
                  transform: "rotateY(180deg)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontSize: "12px", padding: "0 10px", textAlign: "center" }}>
                  {attorney.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attorneys;
