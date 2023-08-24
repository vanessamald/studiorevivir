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
    const [ scrollY, setScrollY ] = useState(0);


    const animateOnScroll = (e) => {
        setScrollY(e.target.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', animateOnScroll);
        return () => {
          window.removeEventListener('scroll', animateOnScroll);
        };
      }, []);
    
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
            <div className='flex-column justify-center'>
                <h2 className='about-i-title text-animation font-classic uppercase' style={{animationDelay: '0.5s'}}>Web Design & Development Focused on Brand</h2>
            </div>
            <div className='flex-row justify-center' onScroll={animateOnScroll}>
                <img 
                    alt='light or dark theme icon' 
                    className={`about-i bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`} 
                    src={theme === 'dark' ? ilight : idark}
                >
                </img>
                <div className='about-i-container flex-column justify-center bkg-transparent'>
                    <h2  
                        className={`about-i-content bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`}
                        style={{animationDelay: '1.5s'}}
                    >
                        mage
                    </h2>
                    <h2 
                        className={`about-i-content bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`}
                        style={{animationDelay: '2s'}}
                    >
                        &
                    </h2>
                    <h2 
                        className={`about-i-content bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`}
                        style={{animationDelay: '2.5s'}}
                    >
                        dentity
                    </h2>
                    {/*<h2 className='about-i-content bkg-transparent text-animation' style={{animationDelay: '2.5s'}} >Brand</h2>*/}
                </div>
            </div>
            </div>
      </div>
    )
}

export default Home;