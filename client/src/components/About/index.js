import React from 'react';
import useTheme from '../useTheme';
import idark from '../../assets/images/i-dark.png';
import ilight from '../../assets/images/i-light.png';

function About() {
    const [ theme, themeToggler, componentMounted, isOn, setIsOn, logo] = useTheme();

 

    return (
        <div id='about'>
            <h2 className='about-i-title'>Web Design & Development Focused on Brand</h2>
            <div className='flex-row'>
                <img className='about-i bkg-transparent' src={theme === 'dark' ? ilight : idark}></img>
                <div className='about-i-container flex-column justify-center bkg-transparent'>
                    
                    <h2 className='about-i-content bkg-transparent' >mage</h2>
                    <h2 className='about-i-content bkg-transparent'>&</h2>
                    <h2 className='about-i-content bkg-transparent'>dentity</h2>
                </div>
            </div>
            
            
        </div>
    )
}

export default About;