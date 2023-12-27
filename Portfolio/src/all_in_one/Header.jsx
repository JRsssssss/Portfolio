import React from "react";

export const Header = () =>{
    return(
        <>
            <div className="flex justify-between bg-#2a2a2a w-screen h-[200px] text-[#c0c0c0]">
                <div className="mr-auto ml-8">
                    <a href="">About me</a>
                </div>
                <div className="ml-auto mr-8">
                    <a href="">Contact me</a>
                </div>
            </div>
            
        </>
    )
}