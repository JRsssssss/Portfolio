import React from "react";
import instagram from '../assets/instagram.svg'
import github from '../assets/square-github.svg'
import facebook from '../assets/square-facebook.svg'
import twitch from '../assets/twitch.svg'
export const Header = () =>{
    return(
        <>
            <div className="flex justify-between h-[100px] text-[#c0c0c0] font-baskerville mt-6 ml-10 mr-10 border">
                <div className="flex gap-10">
                    <div className="text-2xl">
                        <a href="">About</a>
                    </div>
                    <div className="text-2xl">
                        <a href="">Contact</a>
                    </div>
                </div>
                    
                <div className="flex gap-10 ">
                    <div className="">
                        <a href="https://www.instagram.com/palyrahumestromoss/" tarrget="_blank">
                            <img src={instagram} alt="instagram icon" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/JRsssssss" target="_blank">
                            <img src={github} alt="github icon" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100010542041557" target="_blank">
                            <img src={facebook} alt="facebook icon" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.twitch.tv/jr_sssssss" target="_blank">
                            <img src={twitch} alt="twitch icon" className="w-[40px] h-[40px]"/>
                        </a>
                    </div>

                </div>
            
            </div>
            
        </>
    )
}