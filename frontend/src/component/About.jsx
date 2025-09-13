import React from 'react';
import { Code, Smartphone, Cloud } from 'lucide-react'; // Icons from lucide-react

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-12">
      
      <h2 className="text-4xl font-bold text-[#FF9142] mb-12 text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-start max-w-5xl w-full gap-12">

        {/* Left Part: Vertical Line + Key Areas with Icons */}
        <div className="flex flex-col items-center md:items-start space-y-12 relative">
          {/* Vertical Line */}
          <div className=" h-full absolute left-1/2 md:left-auto top-0"></div>

          {/* Key Areas */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <Code size={28} className="text-[#FF9142]" />
              <span className="text-xl font-semibold">Web Development</span>
            </div>

            <div className="flex items-center space-x-4">
              <Smartphone size={28} className="text-[#FF9142]" />
              <span className="text-xl font-semibold">App Development</span>
            </div>

            <div className="flex items-center space-x-4">
              <Cloud size={28} className="text-[#FF9142]" />
              <span className="text-xl font-semibold">Web Hosting</span>
            </div>
          </div>
        </div>

        {/* Right Part: About Content + Stats */}
        <div className="flex-1 space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m Lavkush, a passionate Full Stack Developer specializing in building dynamic and responsive web applications.
            I enjoy crafting clean code and working on innovative projects that solve real-world problems.
            With expertise in technologies like React, Node.js, MongoDB, and TypeScript, I love bringing ideas to life through code.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            When I’m not coding, I enjoy exploring new technologies, contributing to open source, and improving my problem-solving skills.
            My goal is to continue growing as a developer while making meaningful contributions to every project I work on.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-8 mt-8 justify-center md:justify-start">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-40">
              <h3 className="text-3xl font-bold text-[#FF9142]">10+</h3>
              <p className="text-gray-300 mt-2">Projects Completed</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-40">
              <h3 className="text-3xl font-bold text-[#FF9142]">1+</h3>
              <p className="text-gray-300 mt-2">Years of Experience</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-40">
              <h3 className="text-3xl font-bold text-[#FF9142]">5+</h3>
              <p className="text-gray-300 mt-2">Clients Served</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
