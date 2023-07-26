import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Register from '../Register';
import SplitText from '../SplitText';

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

   

    const SplitText2 = () => {
        const menuText = 'about';

        return (
            <span className='menu-link-text'>
                {menuText.split("").map(function(char, index){
                    const style = {
                        "animationDelay": ( index * 5 ) + "s",
                        
                        };
                        return (
                            <span aria-hidden="true" key={index} id={index} className={`menu-link-letter letter-${index}`} style={style}>
                                {char}
                            </span>
                        );
                    })}
                    </span>
                );
            };

    return (
        <div>
            <button className={button} onClick={handleClick}>
                    <div className='nav-line1'></div>
                    <div className='nav-line2'></div>
                    <div className='nav-line3'></div>
            </button>
            <div className={menu}>
                <div className='menu-content'>
                    <SplitText text='Menu'/>
                    <a className='menu-link text-animation' style={{animationDelay: '0.5s'}} href='/'>Home</a>
                    <a className='' style={{animationDelay: '1s'}} href='/about'><SplitText2></SplitText2></a>
                    <a className='menu-link text-animation' style={{animationDelay: '1.5s'}} href='/work'>Work</a>
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