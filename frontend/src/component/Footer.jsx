import React from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

// Define social media as JSON array
const socialMedia = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/lavkush', icon: <Linkedin size={28} /> },
  { name: 'GitHub', url: 'https://github.com/lavkush', icon: <Github size={28} /> },
  { name: 'Twitter', url: 'https://twitter.com/lavkush', icon: <Twitter size={28} /> },
  { name: 'Email', url: 'mailto:lavkush@example.com', icon: <Mail size={28} /> },
];

const Footer = () => {
  const radius = 60; // radius of the circle
  const center = 0; // center offset, we can tweak

  return (
    <footer className="bg-gray-900 text-white py-16 relative flex flex-col items-center justify-center">
      
      {/* Copyright */}
      <p className="text-gray-400 text-center mb-8">
        © {new Date().getFullYear()} Lavkush Kumar. All rights reserved.
      </p>

      {/* Circle Layout */}
      <div className="relative w-48 h-48">
        {socialMedia.map((social, index) => {
          const angle = (index / socialMedia.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-[#FF9142] transition  hover:scale-125"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              title={social.name}
            >
              {social.icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
