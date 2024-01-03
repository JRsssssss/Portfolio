import React from "react";
import earth from "../assets/Prem.jpg";
import './Name_image.css'

export const Name_Image = () => {
    return (
        <div className="flex justify-center items-center mt-[120px] space-x-20 text-[#fff8f8] font-baskerville border">  
            <div className="-mt-1 border">
                <h1 className="text-9xl">
                    Hello
                </h1>
                <p className="">
                    I'm Prem (Jirapat Ruetrakul) <br />
                    I'm software engineering student of KMITL <br />
                </p>
            </div>
            <div className="text-4xl font-bold underline text-red-500 border">
                <img src={earth} alt="Earth" className="object-cover w-[300px] h-[300px] rounded-full ml-5" />
            </div>
            <div className="circle"></div>
            <div className="circle_2"></div>
            <div className="circle_3"></div>
        </div>
        
    );
};