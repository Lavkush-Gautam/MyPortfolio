import React, { useEffect, useRef } from 'react';
import profilePic from '../assets/lavkush.jpg';
import { gsap } from 'gsap';

const MovingImage = () => {
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        // Continuous floating + slight color shift effect
        gsap.to(imageWrapperRef.current, {
            x: '+=20',
            y: '+=15',
            repeat: -1,
            yoyo: true,
            duration: 5,
            ease: 'sine.inOut'
        });

        gsap.to(imageWrapperRef.current, {
            boxShadow: '0 0 60px #FF9142, 0 0 80px #00FFCC, 0 0 100px #FF00FF',
            repeat: -1,
            yoyo: true,
            duration: 6,
            ease: 'sine.inOut'
        });
    }, []);

    return (
        <div ref={imageWrapperRef} className="relative z-10 mt-28 md:mt-0">
            <div className="w-96 h-96 rounded-full  shadow-2xl flex items-center justify-center">
                <img
                    src={profilePic}
                    alt="Lavkush's Profile"
                    className="h-full w-full rounded-full object-contain border-4 border-[#FF9142]"
                />
            </div>
        </div>
    );
};

export default MovingImage;
