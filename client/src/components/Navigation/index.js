import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Register from '../Register';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';

function Navigation() {
    const [ menu, setMenu ] = useState('hidden-menu');
    const [ button, setButton ] =useState('open-menu-button');
    const [ toggle, setToggle ] = useState(false);
    const [ about, setAbout ] = useState('hidden-a');

    // 
    const handleToggle = () => {
        if (!toggle) {
            setMenu('menu-container');
            setButton('close-menu-button')

            if (typeof window != 'undefined' && window.document) {
               //document.body.style.overflow = 'hidden'; 
            }
        }
        if (toggle) {
            setMenu('hidden-menu');
            setButton('open-menu-button');
        }
    }

    const handleClick = () => {
        setToggle(!toggle);
        handleToggle();
        console.log('CLICKED MENU');
    }

    return (
        <div>
            <button className={button} onClick={handleClick}>
                    <div className='nav-line1'></div>
                    <div className='nav-line2'></div>
                    <div className='nav-line3'></div>
            </button>
            <div className={menu}>
                <div className='menu-content flex-column justify-center align-center'>
                    <SplitText text='Menu'/>
                    <a className='text-animation font-classic' style={{animationDelay: '0.5s'}} href='/'><SplitText2 text='Home' /></a>
                    <a className='text-animation font-classic' style={{animationDelay: '1s'}} href='/about'><SplitText2 text='About' /></a>
                    <a className='text-animation font-classic' style={{animationDelay: '1.5s'}} href='/work'><SplitText2 text='Work' /></a>
                    <Contact/>
                </div>
                <div>
                    {/*(<div className='border'></div>*/}
                    {/*<Register/>*/}
                </div>
            </div>
        </div>
    )
}

export default Navigation;