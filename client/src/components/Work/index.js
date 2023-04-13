import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";
import evokeDesktop from '../../assets/images/evoke-desktop1.png';
import useCursorPosition from '../useCursorPosition';

function Work() {
    const [ position ] = useCursorPosition();

    var x = position.clientX;
    var y = position.clientY;

    const [ isDiv, setDiv ] = useState(false);

    const showDiv = () => {
        setDiv(true);
    }

    const closeDiv = () => {
        setDiv(false)
    }

    return (
        <div className='work-container'>
            <div className='flex-row work-content' onMouseEnter={showDiv} onMouseLeave={closeDiv} style={{padding: ''}}>
                
                <span className='border-bottom'></span>
                <span>01/</span>
                <p><em>Evoke Neurodiagnostics</em></p>
                <span className='border-bottom'></span>
                {isDiv && (<img className='work-img1-container' src={evokeDesktop} style={{left: x + window.scrollX - (200/2), top: y + window.scrollY - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}></img>)}
                
            </div>
            <div className='flex-row work-content'>
                <span className='border-bottom'></span>
                <span>02/</span>
                <p><em>Ruff Mom Life</em></p>
                <span className='border-bottom'></span>
            </div>
            <div className='flex-row work-content'>
                <span className='border-bottom'></span>
                <span>03/</span>
                <p><em>Coming Soon</em></p>
                <span className='border-bottom'></span>
            </div>
        </div>
        
    )
}

export default Work;