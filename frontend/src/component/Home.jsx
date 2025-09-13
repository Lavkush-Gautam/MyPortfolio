import React from 'react';
import MovingImage from './MovingImage';

const Home = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-around p-12 text-white min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">

            {/* Decorative Circle */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF9142] rounded-full opacity-20 blur-3xl z-0"></div>

            {/* Floating Symbols */}
            <span className="absolute top-10 left-10 text-5xl text-[#FF9142] opacity-40 animate-pulse">★</span>
            <span className="absolute bottom-20 right-20 text-4xl text-gray-400 opacity-30 animate-bounce">✦</span>
            <span className="absolute top-1/3 right-1/4 text-3xl text-white opacity-20 animate-spin">✧</span>
            <span className="absolute top-2/3 left-1/3 text-2xl text-[#FF9142] opacity-25 animate-ping">✪</span>
            <span className="absolute top-1/2 left-1/4 text-2xl text-[#FF9142] opacity-25 animate-ping">✪</span>
            <span className="absolute bottom-1/4 right-1/3 text-2xl text-[#FF9142] opacity-25 animate-ping">✪</span>

            {/* Text Section */}
            <div className="relative z-10 text-center md:text-left space-y-6 max-w-md">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Hello</h1>
                <h4 className="text-3xl pl-4 text-[#FF9142] font-semibold drop-shadow-md">I'm Lavkush</h4>
                <p className="text-5xl font-medium text-gray-300">Full Stack Developer</p>

                <div className="space-x-6 mt-6">
                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/lavksuh gautam .pdf'; // Make sure this file is in the public folder
                            link.download = 'lavksuh gautam.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="relative bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-400 transform hover:scale-105 transition duration-300 overflow-hidden"
                    >
                        Download CV
                    </button>


                </div>
            </div>

            {/* Image Section with Overlap */}

            <div>
                <MovingImage />
            </div>

        </div>
    );
};

export default Home;
