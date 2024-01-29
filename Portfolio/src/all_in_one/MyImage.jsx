import React from "react";
import Prem1 from '../assets/premsitting.jpg'
import Prem2 from '../assets/premactting.jpg'
import Prem3 from '../assets/premwatching.jpg'
import './MyImage.css'
export const MyImage = () =>{

    return(
        <div className="flex flex-row justify-center mt-[485px]">
            <div>
                <img src={Prem1} alt="Prem sitting"/>
            </div>
            <div>
                <img src={Prem2} alt="Prem standing" />
            </div>
            <div>
                <img src={Prem3} alt="Prem watching" />
            </div>
        </div>
    );
};