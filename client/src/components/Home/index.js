import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import studioRevivir from '../../assets/images/studiorevivir-light.png'
import studioRevivirDark from '../../assets/images/studiorevivir-dark.png'
import Navigation from '../Navigation';
import useTheme from '../useTheme';
import idark from '../../assets/images/i-dark.png';
import ilight from '../../assets/images/i-light.png';

function Home() {
    const [ theme, themeToggler, isOn] = useTheme();
    
    return (
        <div className={`${theme} home-container`}>

            <div className='home-nav-container'>
                <Navigation/>
                <div className="theme-togg-container">
                    <div 
                        data-darkmode={isOn}
                        onClick={themeToggler}
                        className={theme === 'dark' ? 'toggleDark' : 'toggleLight' }
                        >
                        <motion.div layout className='handle'></motion.div>
                    </div>
                </div>
            </div>
    
            <div className='logo-container'>
                <img className='logo' src={theme === 'dark' ? studioRevivir : studioRevivirDark} alt='Revivir Studio'></img>
            </div>
            <div>
                {/*<p className='font-italic'>motto: here </p>*/}
            </div>
        </div>
    )
}

export default Home;