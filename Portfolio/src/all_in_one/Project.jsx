import React, { useState, useEffect } from 'react';
import './Project.css'
import Home1 from '../assets/home-1.png'
import About1 from '../assets/about-1.png'
import Program1 from '../assets/program-1.png'
import useVisibility from './useVisibility';

export const Project = () => {
    const isVisible = useVisibility('Project_part');
    return(
        <div id="Project_part" className='text-[#fff8f8] font-baskerville'>
            <div className='project_text'>
                <h1>Project</h1>
            </div>
            <div id = 'project_container'className='flex justify-center gap-[100px] mt-[200px]'>
                <p>On process...</p>
            </div>
        </div>
    )
}