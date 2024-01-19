import React, { useState, useEffect } from 'react';
import './Experience.css'
export const Experience = () =>{
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const expart = document.getElementById('container');
        const topPosition = expart.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (!isVisible && topPosition < screenPosition) {
            setIsVisible(true);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    return(
        <div id="container" className={`flex justify-center items-center border ${isVisible ? 'show' : 'hide'}`} >
            <div className="experience_paragraph">
                <p>
                    Hello world
                </p>
            </div>
            <div className="experience_text">
                <h1>Experience</h1>
            </div>
        </div>
    )
}