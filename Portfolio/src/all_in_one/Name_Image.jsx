import React from "react";
import earth from "../assets/earth.jpg"; // Ensure this path is correct

export const Name_Image = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <h1 className="text-4xl font-bold underline text-red-500 rotate-animation">
                <img src={earth} alt="Earth" className="w-[200px] h-[200px]" />
            </h1>
        </div>
    );
};