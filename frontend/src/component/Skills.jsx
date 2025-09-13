import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'JavaScript', level: 'Advanced', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', level: 'Advanced', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', level: 'Intermediate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', level: 'Intermediate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'HTML5', level: 'Advanced', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', level: 'Advanced', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', level: 'Advanced', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Java', level: 'Intermediate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
];

const Skills = () => {
    const skillsRef = useRef([]);
    skillsRef.current = [];

    const addToRefs = (el) => {
        if (el && !skillsRef.current.includes(el)) {
            skillsRef.current.push(el);
        }
    };

    useEffect(() => {
        skillsRef.current.forEach((el) => {
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
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex flex-col items-center justify-center p-12">
            
            <h2 className="text-4xl font-bold mb-12 text-[#FF9142] text-center">My Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition hover:scale-105 duration-300"
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-16 h-16 object-contain mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-[#FF9142]">{skill.name}</h3>
                        <p className="text-gray-300 mt-1">{skill.level}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
