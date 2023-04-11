import React, { useState } from 'react';

function Navigation() {
    const [ menu, setMenu ] = useState('hidden-menu');
    const [ button, setButton ] =useState('open-menu-button');
    const [ toggle, setToggle ] = useState(false);

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
            <button className={button} onClick={handleClick}>
                
                    <div className='nav-line1'></div>
                    <div className='nav-line2'></div>
                    <div className='nav-line3'></div>
                
            </button>
            <div className='border-bottom'></div>
            <div className={menu}>
                <div className='menu-content'>
                    <a className='menu-link' href=''>About</a>
                    <a className='menu-link' href=''>Work</a>
                    <a className='menu-link' href=''>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;