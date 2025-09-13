import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex items-center justify-center p-12">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side: Info + Call To Action */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-5xl font-bold text-[#FF9142]">Let’s Talk</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m always excited to work on new projects, solve challenges, or collaborate on something amazing.
            Feel free to send me a message and let’s make something great together.
          </p>

          <button className="bg-[#FF9142] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-orange-500 transform hover:scale-105 transition duration-300 w-max">
            Contact Me
          </button>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/Lavkush-Gautam" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9142]">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/lavkush-gautam-26898a303/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9142]">
              <Linkedin size={28} />
            </a>
            <a href="mailto:lk883284@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9142]">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <form className="flex flex-col space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none border border-gray-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none border border-gray-700"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none border border-gray-700"
            ></textarea>

            <button
              type="submit"
              className="bg-[#FF9142] text-white px-6 py-3 rounded-lg shadow hover:bg-orange-500 transform hover:scale-105 transition duration-300"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
