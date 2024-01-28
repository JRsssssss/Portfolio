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
        <div id="container" className={`flex justify-center items-center text-[#fff8f8] font-baskerville`} >
            <div className="experience_paragraph">
                <div className={`${isVisible ? 'show2' : 'hide2'}`}>
                    <h2 className={`year`}>2022</h2>
                    <p className={`year_detail gap[600px]`}>
                        Started learning and delvelop the portfolio website
                        by HTML and CSS.
                    </p>
                    <h2 className={`year`}>2023</h2>
                    <p className={`year_detail `}>
                        Learning the JavaScript, RESTful API (FastAPI). Making a project
                        with team, building the Software Engineering website.
                    </p>
                </div>
            </div>
            <div className="experience_text">
                <h1>Experience</h1>
            </div>
        </div>
    )
}