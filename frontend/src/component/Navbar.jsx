import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = ({ scrollToSection, refs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const mobileMenuRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (sectionRef, sectionName) => {
        scrollToSection(sectionRef);
        setIsOpen(false);
        setActiveSection(sectionName);
    };

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        } else {
            gsap.to(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    // Active section detection on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;

            const checkSection = (ref, name) => {
                const offsetTop = ref.current.offsetTop;
                const offsetHeight = ref.current.offsetHeight;
                return scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight
                    ? name
                    : null;
            };

            const sections = [
                { ref: refs.homeRef, name: 'home' },
                { ref: refs.skillsRef, name: 'skills' },
                { ref: refs.aboutRef, name: 'about' },
                { ref: refs.projectsRef, name: 'works' },
                { ref: refs.contactRef, name: 'contact' },
            ];

            for (const section of sections) {
                const active = checkSection(section.ref, section.name);
                if (active) {
                    setActiveSection(active);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [refs]);

    return (
        <nav ref={navRef} className="px-6 py-4 flex items-center justify-between text-white fixed w-full z-50">

            <h1 className="text-2xl font-extrabold text-[#FF9142] cursor-pointer"
                onClick={() => handleNavClick(refs.homeRef, 'home')}>
                LAVKUSH
            </h1>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10 items-center text-sm">
                <button
                    onClick={() => handleNavClick(refs.homeRef, 'home')}
                    className={`transition ${activeSection === 'home' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                >
                    HOME
                </button>

                <button
                    onClick={() => handleNavClick(refs.skillsRef, 'skills')}
                    className={`transition ${activeSection === 'skills' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                >
                    SKILLS
                </button>

                <button
                    onClick={() => handleNavClick(refs.aboutRef, 'about')}
                    className={`transition ${activeSection === 'about' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                >
                    ABOUT ME
                </button>

                <button
                    onClick={() => handleNavClick(refs.projectsRef, 'works')}
                    className={`transition ${activeSection === 'works' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                >
                    WORKS
                </button>

                <button
                    onClick={() => handleNavClick(refs.contactRef, 'contact')}
                    className={`bg-[#FF9142] px-5 py-2 rounded-full hover:bg-orange-500 transition`}
                >
                    CONTACT
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="absolute top-full left-0 w-full bg-gray-900 overflow-hidden text-center"
                style={{ height: 0, opacity: 0 }}
            >
                <div className="flex flex-col items-center py-6 space-y-4 text-lg">
                    <button
                        onClick={() => handleNavClick(refs.homeRef, 'home')}
                        className={`transition ${activeSection === 'home' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                    >
                        HOME
                    </button>

                    <button
                        onClick={() => handleNavClick(refs.skillsRef, 'skills')}
                        className={`transition ${activeSection === 'skills' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                    >
                        SKILLS
                    </button>

                    <button
                        onClick={() => handleNavClick(refs.aboutRef, 'about')}
                        className={`transition ${activeSection === 'about' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                    >
                        ABOUT ME
                    </button>

                    <button
                        onClick={() => handleNavClick(refs.projectsRef, 'works')}
                        className={`transition ${activeSection === 'works' ? 'text-[#FF9142]' : 'hover:text-[#FF9142]'}`}
                    >
                        WORKS
                    </button>

                    <button
                        onClick={() => handleNavClick(refs.contactRef, 'contact')}
                        className="bg-[#FF9142] px-6 py-2 rounded-full hover:bg-orange-500 transition"
                    >
                        CONTACT
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
