import React from "react";
import earth from "../assets/earth.jpg"; // Ensure this path is correct

export const Name_Image = () => {
    return (
        <div className="flex justify-center items-center space-x-20 h-screen w-full text-[#c0c0c0] font-baskerville">  
            <div>
                <h1 className="text-9xl">
                    Hello
                </h1>
                <p>
                    I'm Prem(Jirapat Ruetrakul)
                </p>
            </div>
            <div className="text-4xl font-bold underline text-red-500 rotate-animation">
                <img src={earth} alt="Earth" className="w-[200px] h-[200px]" />
            </div>
        </div>
        
    );
};