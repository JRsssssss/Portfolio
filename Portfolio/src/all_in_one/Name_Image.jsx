import React, { useState, useEffect } from "react";
import earth from "../assets/Prem.jpg";
import './Name_image.css';

export const Name_Image = () => {
    return (
        <div className="flex justify-center items-center mt-[120px] space-x-10 text-[#fff8f8] font-baskerville">  
            <div className="-mt-1 items-center">
                <h1 className="hello_text text-center">Hello</h1>
                <p className="short_intro">
                    I'm Prem (Jirapat Ruetrakul) <br />
                    I'm a software engineering student at KMITL <br />
                </p>
            </div>
            <div className="text-4xl font-bold underline text-red-500">
                <img src={earth} alt="Earth" className="my_img ml-5" />
            </div>
            <div className="circle"></div>
            <div className="circle_2"></div>
            <div className="circle_3"></div>
        </div>
    );
};
