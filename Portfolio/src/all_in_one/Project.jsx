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
                <div className='first_project gap-[200px]'>
                    <div>
                        <h2>Software Engneering KMITL Website</h2>
                        <p className='text_paragraph'>Link: <a id= 'first_link'href="" target='blank' className='link_to_website'>SE KMITL Website</a></p>
                    </div>
                    <div className='flex gap-[50px] w-[200px]'>
                        <img src= {Home1} alt="home page of SE website project" className='img_first_project'/>
                        <img src= {About1} alt="about pagee of SE website project" className='img_first_project'/>
                        <img src= {Program1} alt="program pagee of SE website project" className='img_first_project'/>
                    </div> 
                </div>
            </div>
        </div>
    )
}