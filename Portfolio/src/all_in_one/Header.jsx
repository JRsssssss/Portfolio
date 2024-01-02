import React from "react";

export const Header = () =>{
    return(
        <>
            <div className="flex justify-left gap-10 bg-#2a2a2a h-[100px] text-[#c0c0c0] font-baskerville mt-6 ml-10">
                <div className="text-2xl">
                    <a href="">About me</a>
                </div>
                <div className="text-2xl">
                    <a href="">Contact me</a>
                </div>
                
            </div>
            
        </>
    )
}