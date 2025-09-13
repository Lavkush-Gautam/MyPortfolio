import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VerticalLine = ({ height = 'h-64', dotColor = '#FF9142' }) => {
    const lineRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        // Animate the vertical line growth
        gsap.fromTo(
            lineRef.current,
            { height: 0 },
            {
                height: '100%',
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                },
            }
        );

        // Animate the dot pulsing infinitely
        gsap.to(dotRef.current, {
            scale: 1.5,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut',
        });
    }, []);

    return (
        <div className="relative flex items-center">
            {/* Vertical Line */}
            <div
                ref={lineRef}
                className={`w-1 bg-[#FF9142] ${height}`}
                style={{ height: 0 }} // Start from 0 height
            ></div>

            {/* Dot */}
            <div
                ref={dotRef}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: dotColor }}
            ></div>
        </div>
    );
};

export default VerticalLine;
