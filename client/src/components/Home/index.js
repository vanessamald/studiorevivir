import React from 'react';
import {ReactComponent as RevivirLogo } from '../../assets/images/revivirlogo.svg';
import Contact from '../Contact';
import homeLogo from '../../assets/images/Home copy.png';

function Home() {
    return (
        <div className='home-container'>
            
                
            
            <div className='logo-container'>
                <Contact/>
                
                <RevivirLogo className='logo' alt='Studio Revivir: Web Design and Development Website coming soon!'/>
                
            </div>
            
      </div>
    )
}

export default Home;