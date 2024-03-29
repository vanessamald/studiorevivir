import React, { useState } from 'react';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';

function Navigation() {
    const [ menu, setMenu ] = useState('hidden-menu');
    const [ button, setButton ] =useState('open-menu-button');
    const [ toggle, setToggle ] = useState(false);
    const [ about, setAbout ] = useState('hidden-a');

    // handle navigation menu 
    const handleToggle = () => {
        if (!toggle) {
            setMenu('menu-container');
            setButton('close-menu-button')
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
                    <div className='split-text-container flex-row space-between align-center padding-around'>
                        <SplitText text='Menu' fontColor='alternate-text-color'/>
                        <a href='/' className='menu-issue text-animation'><em className='menu-issue-em'>revívír</em>STUDIO /<em className='menu-issue-em'> No.001</em></a>
                    </div>
                    <div className='menu-links-container flex-column justify-center'>
                        <a className='text-animation font-classic' style={{animationDelay: '1s'}} href='/about'><SplitText2 text='About' /></a>
                        <a className='text-animation font-classic' style={{animationDelay: '1.5s'}} href='/services'><SplitText2 text='Services' /></a>
                        <a className='text-animation font-classic' style={{animationDelay: '2s'}} href='/work'><SplitText2 text='Work' /></a>
                        <a className='text-animation font-classic' style={{animationDelay: '2.5s'}} href='/inquire'><SplitText2 text='Inquire' /></a>
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