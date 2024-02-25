import React from "react";
import Prem1 from '../assets/premsitting.jpg'
import Prem2 from '../assets/premactting.jpg'
import Prem3 from '../assets/premwatching.jpg'
import useVisibility from './useVisibility';
import './MyImage.css'

export const MyImage = () =>{
    const isVisible = useVisibility('container2');

    return(
        <div id="container2" className="flex justify-center">
            <div className={`${isVisible ? 'show_image_slide_from_left ' : 'hide_image'}`}>
                <img src={Prem1} alt="Prem sitting" className="img_for_me"/>
            </div>
            <div className={`${isVisible ? 'show_image' : 'hide_image'}`}>
                <img src={Prem2} alt="Prem standing" className="img_for_me"/>
            </div>
            <div className={`${isVisible ? 'show_image_slide_from_right ' : 'hide_image'}`}>
                <img src={Prem3} alt="Prem watching" className="img_for_me" />
            </div>
        </div>
    );
};