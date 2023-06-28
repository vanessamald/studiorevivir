import React from 'react';
import useTheme from '../useTheme';
import idark from '../../assets/images/i-dark.png';
import ilight from '../../assets/images/i-light.png';
import Navigation from '../Navigation';

function About() {
    const [ theme ] = useTheme();

    return (
        <div className='about-container'>
            <Navigation/>
            <h2 className='about-i-title'>Web Design & Development Focused on</h2>
            <div className='flex-row'>
                <img alt='light or dark theme icon' className='about-i bkg-transparent' src={theme === 'dark' ? ilight : idark}></img>
                <div className='about-i-container flex-column justify-center bkg-transparent'>
                
                    <h2 className='about-i-content bkg-transparent' >dentity</h2>
                    <h2 className='about-i-content bkg-transparent'>&</h2>
                    <h2 className='about-i-content bkg-transparent'>mage</h2>
                   
                    <h2 className='about-i-content bkg-transparent' >Brand</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default About;