import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import groceryDelivery from '../assets/grocery.jpeg';
import pebblyConnect from '../assets/pebbly.png';
import financeManagement from '../assets/finance.jpg';
import onlineExam from '../assets/exam.jpeg';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Grocery Delivery App',
        description: 'An application that allows users to order groceries online with features like product browsing, cart management, and order tracking.',
        languages: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/Lavkush-Gautam/grocery',
        liveLink: 'https://grocery-lya9.onrender.com',
        image: groceryDelivery,
    },
    {
        title: 'Pebbly-Connect Clone',
        description: 'A social media clone that allows users to post updates, connect with friends, and chat in real-time, inspired by Pebbly Connect.',
        languages: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
        githubLink: 'https://github.com/Lavkush-Gautam/Pebbly',
        liveLink: 'https://pebbly.onrender.com',
        image: pebblyConnect,
    },
    {
        title: 'Finance Management App',
        description: 'A finance management tool for users to track expenses, manage budgets, and visualize financial data using charts and reports.',
        languages: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/Lavkush-Gautam/Advit',
        liveLink: 'https://advisor-privat.netlify.app/',
        image: financeManagement,
    },
    {
        title: 'Online Exam Platform',
        description: 'A platform for conducting online exams with features like question management, timer, automated grading, and detailed performance reports.',
        languages: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/lavkush/online-exam-platform',
        liveLink: 'https://exam.lavkush.dev',
        image: onlineExam,
    },
];


const Projects = () => {
    const projectRefs = useRef([]);
    projectRefs.current = [];

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

    useEffect(() => {
        projectRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-12">
            <h2 className="text-4xl font-bold text-[#FF9142] text-center mb-12">My Projects</h2>

            <div className="flex flex-col space-y-16">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className={`flex flex-col md:flex-row items-center overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Left Side: Project Info */}
                        <div className="flex-1 p-8">
                            <h3 className="text-3xl font-semibold text-[#FF9142] mb-4">
                                {project.title}
                            </h3>

                            {/* Languages as Buttons */}
                            <div className="flex flex-wrap gap-4 mb-4">
                                {project.languages.map((lang, idx) => (
                                    <span
                                        key={idx}
                                        className="text-black bg-gray-50 px-4 py-1 rounded-full text-sm"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Links */}
                            <div className="flex space-x-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FF9142] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Project Image */}
                        <div className="flex-1 p-6 flex justify-center relative">
                            <div className="relative bg-gray-800 rounded-lg shadow-2xl p-4 transform hover:scale-105 transition duration-500">

                                {/* Decorative Border only at top-left corner */}
                                <div className="absolute top-0 left-0 w-12 h-1 bg-[#FF9142] rounded-tr-lg"></div>
                                <div className="absolute top-0 left-0 w-1 h-12 bg-[#FF9142] rounded-br-lg"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg object-cover w-90 h-64 md:h-60"
                                />
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
