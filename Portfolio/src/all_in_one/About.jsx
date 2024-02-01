import React, { useState, useEffect } from 'react';
import './About.css';
import useVisibility from './useVisibility';
export const About = () => {
    const isVisible = useVisibility('about_part');
    return (
        <div id="about_part" className={`flex justify-center items-center text-[#fff8f8] font-baskerville`}>
            <div className='about_me_text'>
                <h1>About me</h1>
            </div>
            <div className={`about_me_paragraph ${isVisible ? 'show' : 'hide'}`}>
                <p>
                    Hello! My name is Jirapat Ruetrakul, but you can call me Prem. I am currently a passionate second-year student at KMITL University,
                    where my journey in the realm of technology and innovation is in full swing. With a keen interest in the interconnected world of
                    software development, I am enthusiastically paving my way towards becoming a proficient full-stack developer.
                </p>
            </div>
        </div>
    );
};
