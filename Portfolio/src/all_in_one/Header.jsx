import React from "react";
import instagram from '../assets/instagram.svg'
import github from '../assets/square-github.svg'
import facebook from '../assets/square-facebook.svg'
export const Header = () =>{
    return(
        <>
            <div className="flex justify-between h-[100px] text-[#c0c0c0] font-baskerville mt-6 ml-10 mr-10">
                <div className="flex gap-10 ml-8">
                    <div className="text-2xl">
                        <a href="">About me</a>
                    </div>
                    <div className="text-2xl">
                        <a href="">Contact me</a>
                    </div>
                </div>
                    
                <div className="flex gap-10 ">
                    <div className="">
                        <a href="">
                            <img src={instagram} alt="instagram icon" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={github} alt="github icon" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={facebook} alt="facebook icon" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="">

                        </a>
                    </div>

                </div>
            
            </div>
            
        </>
    )
}