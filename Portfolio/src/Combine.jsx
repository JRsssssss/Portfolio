import React from 'react';
import {Name_Image} from './all_in_one/Name_Image';
import {Header} from './all_in_one/Header';
import {About} from './all_in_one/About';   
import { Experience } from './all_in_one/Experience';
import {MyImage} from './all_in_one/MyImage'
const Combinecomponent = () => {
    return(
        <div>
            <Header/>
            <Name_Image/>
            <MyImage/>
            <About/>
            <Experience/>
        </div>
    )
}

export default Combinecomponent;