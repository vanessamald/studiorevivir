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
            <button className={button} onClick={handleClick} aria-label="Menu">
                    <div className='nav-line1'></div>
                    <div className='nav-line2'></div>
                    <div className='nav-line3'></div>
            </button>
            <div className={menu}>
                <div className='menu-content flex-column justify-center'>
                    <div className='menu-content-text flex-row space-between align-center'>
                        <SplitText text='Menu' fontColor='alternate-text-color'/>
                        <p className='menu-issue text-animation'><em className='menu-issue-em'>revívír</em>STUDIO /<em className='menu-issue-em'> No.001</em></p>
                    </div>
                    <div className='menu-links-container flex-column justify-center'>
                        <a className='text-animation font-classic' style={{animationDelay: '0.5s'}} href='/'><SplitText2 text='Home' /></a>
                        <a className='text-animation font-classic' style={{animationDelay: '1s'}} href='/about'><SplitText2 text='About' /></a>
                        <a className='text-animation font-classic' style={{animationDelay: '1.5s'}} href='/work'><SplitText2 text='Work' /></a>
                        <Contact/>
                    </div>
                    {/*<Register/>*/}
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