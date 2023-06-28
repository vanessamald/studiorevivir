import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../Contact';
import studioRevivir from '../../assets/images/studiorevivir-light.png'
import studioRevivirDark from '../../assets/images/studiorevivir-dark.png'
import Navigation from '../Navigation';
import useTheme from '../useTheme';
import About from '../About';
import Work from '../Work';
import Register from '../Register';

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
            {/*<About/> */} 
            {/*<Work/>*/}
      </div>
    )
}

export default Home;