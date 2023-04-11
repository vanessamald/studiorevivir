import React from 'react';
import {ReactComponent as RevivirLogo } from '../../assets/images/revivirlogo.svg';
import Contact from '../Contact';
import homeLogo from '../../assets/images/Home copy.png';
import studioRevivir from '../../assets/images/studiorevivir-light.png'
import Navigation from '../Navigation';

function Home() {
    return (
        <div>
            <Navigation/>
            <img className='logo' src={studioRevivir} alt='Revivir Studio'></img>
        <div className='home-container'>
            
            <div className='logo-container'>
                {/*<Contact/>*/}
                {/*<RevivirLogo className='logo' alt='Studio Revivir: Web Design and Development Website coming soon!'/>*/}
            </div>
            
      </div>
      </div>
    )
}

export default Home;