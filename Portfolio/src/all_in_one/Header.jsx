import React from "react";
import instagram from '../assets/instagram.svg'
import github from '../assets/square-github.svg'
import facebook from '../assets/square-facebook.svg'
import twitch from '../assets/twitch.svg'
import { Link } from 'react-scroll';
import './Header.css';
export const Header = () =>{
    return(
        <>
            <div className="flex justify-between h-[100px] text-[#c0c0c0] font-baskerville mt-6 ml-10 mr-10 border">
                <div className="about_contact ">
                    <div>
                        <Link to="about_part" smooth={true} duration={1000}>
                            About
                        </Link>
                    </div>
                    <div>
                        <a href="">Contact</a>
                    </div>
                </div>
                    
                <div className="icon_container">
                    <div>
                        <a href="https://www.instagram.com/palyrahumestromoss/" tarrget="_blank">
                            <img src={instagram} alt="instagram icon" className="icon"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/JRsssssss" target="_blank">
                            <img src={github} alt="github icon" className="icon"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100010542041557" target="_blank">
                            <img src={facebook} alt="facebook icon" className="icon"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.twitch.tv/jr_sssssss" target="_blank">
                            <img src={twitch} alt="twitch icon"  className="icon"/>
                        </a>
                    </div>

                </div>
            
            </div>
            
        </>
    )
}