import React from "react";
import Prem1 from '../assets/premsitting.jpg'
import Prem2 from '../assets/premactting.jpg'
import Prem3 from '../assets/premwatching.jpg'
import useVisibility from './useVisibility';
import './MyImage.css'

export const MyImage = () =>{
    const isVisible = useVisibility('container2');

    return(
        <div id="container2" className="flex justify-center border">
            <div className="border">
                <img src={Prem1} alt="Prem sitting"/>
            </div>
            <div className="border">
                <img src={Prem2} alt="Prem standing" />
            </div>
            <div className="border">
                <img src={Prem3} alt="Prem watching" />
            </div>
        </div>
    );
};