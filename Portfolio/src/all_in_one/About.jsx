import React, { useState, useEffect } from 'react';
import './About.css';

export const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const aboutPart = document.getElementById('about_part');
        const topPosition = aboutPart.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (!isVisible && topPosition < screenPosition) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    return (
        <div id="about_part" className={`flex justify-center items-center border h-[300px] text-[#fff8f8] font-baskerville ${isVisible ? 'show' : 'hide'}`}>
            <div className='about_me_text'>
                <h1>About me</h1>
            </div>
            <div className='about_me_paragraph'>
                <p>
                    Hello! My name is Jirapat Ruetrakul, but you can call me Prem. I am currently a passionate second-year student at KMITL University,
                    where my journey in the realm of technology and innovation is in full swing. With a keen interest in the interconnected world of
                    software development, I am enthusiastically paving my way towards becoming a proficient full-stack developer.
                </p>
            </div>
        </div>
    );
};
