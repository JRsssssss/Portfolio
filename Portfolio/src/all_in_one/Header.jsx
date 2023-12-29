import React from "react";

export const Header = () =>{
    return(
        <>
            <div className="flex justify-between bg-#2a2a2a w-full h-[200px] text-[#c0c0c0]">
                <div className="mr-auto ml-8 mt-10">
                    <a href="" >About me</a>
                </div>
                <div className="mx-auto mt-10">
                    <h1 className="font-baskerville text-7xl">Portfolio</h1>
                </div>
                <div className="ml-auto mr-8 mt-10">
                    <a href="">Contact me</a>
                </div>
            </div>
            
        </>
    )
}