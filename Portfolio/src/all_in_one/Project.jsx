import React, { useState, useEffect } from 'react';
import './Project.css'
import Home1 from '../assets/home-1.png'
import Home2 from '../assets/home-2.png'
import Home3 from '../assets/home-3.png'
import Home4 from '../assets/home-4.png'
import Home5 from '../assets/home-5.png'
import useVisibility from './useVisibility';

export const Project = () => {
    const isVisible = useVisibility('Project_part');
    return(
        <div id="Project_part" className='text-[#fff8f8] font-baskerville border'>
            <div className='project_text'>
                <h1>Project</h1>
            </div>
            <div id = 'project_container'className='flex justify-center gap-[100px] mt-[200px] border'>
                <div className='first_project'>
                    <h2>Software Engneering KMITL Website</h2>
                    <div>
                        <p className='text_paragraph'>Link: <a id= 'first_link'href="" className='link_to_website'>SE KMITL Website</a></p>
                    </div>
                </div>
                <div id='image_first_project' className='flex gap-[20px]'>
                    <img src= {Home1} alt="Home1" />
                    <img src= {Home2} alt="Home2" />
                    <img src= {Home3} alt="Home3" />
                    <img src= {Home4} alt="Home4" />
                    <img src= {Home5} alt="Home5" />
                </div> 
            </div>
        </div>
    )
}