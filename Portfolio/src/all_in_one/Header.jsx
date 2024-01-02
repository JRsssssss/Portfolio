import React from "react";

export const Header = () =>{
    return(
        <>
            <div className="flex justify-center gap-10 bg-#2a2a2a w-full h-[200px] text-[#c0c0c0] font-baskerville">
                <div className="text-2xl mt-6">
                    <a href="">About me</a>
                </div>
                <div className="text-2xl mt-6">
                    <a href="">Contact me</a>
                </div>
                
            </div>
            
        </>
    )
}