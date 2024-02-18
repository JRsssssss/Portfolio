import React, { useState, useEffect } from 'react';
import './Project.css'
import useVisibility from './useVisibility';

export const Project = () => {
    const isVisible = useVisibility('Project_part');
    return(
        <div id="Project_part" className='text-[#fff8f8] font-baskerville'>
            <div className='project_text'>
                <h1>Project</h1>
            </div>
            <div className='flex flex-row justify-center gap-[500px] mt-[200px]'>
                <div className='first_project'>
                    <h2>Software Engneering KMITL Website</h2>
                </div>
            </div>
        </div>
    )
}