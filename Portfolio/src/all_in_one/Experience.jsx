import React, { useState, useEffect } from 'react';
import './Experience.css'
import useVisibility from './useVisibility';
export const Experience = () => {
    const isVisible = useVisibility('container');

    return (
        <div id="container" className="flex justify-center items-center text-[#fff8f8] font-baskerville">
            <div className="experience_paragraph">
                <div>
                    <h2 className={`year ${isVisible ? 'show3 year_animated' : 'hide3'}`}>2022</h2>
                    <p className={`year_detail ${isVisible ? 'show2' : 'hide2'}`}>
                        Started learning and developing the portfolio website by HTML and CSS.
                    </p>
                    <h2 className={`year ${isVisible ? 'show3 year_animated' : 'hide3'}`}>2023</h2>
                    <p className={`year_detail ${isVisible ? 'show2' : 'hide2'}`}>
                        Learning JavaScript, RESTful API (FastAPI). Making a project with a team, building the Software Engineering website.
                    </p>
                </div>
            </div>
            <div className={`experience_text ${isVisible ? 'experience_text_animated' : ''}`}>
                <h1>Experience</h1>
            </div>
        </div>
    );
};
