import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_esan38h", // Replace with your EmailJS service ID
        "template_fe2vglb", // Replace with your EmailJS template ID
        formData,
        "wlUcdSUfjn5yn-Gsn" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="flex">
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start w-full lg:w-auto">
        <img
          src="./src/assets/images/form.jpg"
          alt="Henrrike Quarshie"
          className="h-[60vh] lg:h-[100vh] w-[50vw] object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="p-8 w-full lg:w-1/2 bg-[#A5A048]">
        <p className="text-l font-bold text-[#d3d0a3] mb-2">Book an Appointment</p>
        <p className="text-[2rem] font-bold text-white mb-6">Free Consultation</p>
        <form onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1"></label>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-[25rem] border-[0.5px] border-[#EDF2FA] p-2 rounded font-semibold bg-[#A5A048] caret-white text-white placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1"></label>
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-[25rem] border-[0.5px] p-2 rounded font-semibold bg-[#A5A048] caret-white text-white placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1"></label>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-[25rem] border-[0.5px] p-2 rounded font-semibold bg-[#A5A048] caret-white text-white placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1"></label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-[25rem] border-[0.5px] p-2 rounded font-semibold bg-[#A5A048] caret-white text-white placeholder-white focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[10rem] border-2 bg-gray-900 border-gray-900 text-white py-3 rounded font-semibold hover:bg-[#23272b] hover:border-[#23272b]"
          >
            Send message
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
      </div>
    </div>
  );
};

export default Form;
