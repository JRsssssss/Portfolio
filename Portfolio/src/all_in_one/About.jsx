import React from 'react';
import './About.css'
export const About = () =>{
    return(
        <div id="about_part" className='flex justify-center items-center gap-20 h-[300px] text-[#fff8f8] font-baskerville border'>
            <div className='about_me_text border'>
                <h1>About me</h1>
            </div>
            <div className='about_me_paragraph border'>
                <p>
                    Hello! My name is Jirapat Ruetrakul, but you can call me Prem. I am currently a passionate second-year student at KMITL University,
                    where my journey in the realm of technology and innovation is in full swing. With a keen interest in the interconnected world of
                    software development, I am enthusiastically paving my way towards becoming a proficient full-stack developer.
                </p>
            </div>
        </div>
    )
}
