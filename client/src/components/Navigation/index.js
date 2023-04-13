import React, { useState } from 'react';
import Contact from '../Contact';


function Navigation() {
    
    

    const [ menu, setMenu ] = useState('hidden-menu');
    const [ button, setButton ] =useState('open-menu-button');
    const [ toggle, setToggle ] = useState(false);
    const [ about, setAbout ] = useState('hidden-a');

    const handleToggle = () => {
        if (!toggle) {
            setMenu('menu-container');
            setButton('close-menu-button')

            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
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

    // title animation
    const aboutText = 'bout';
    const SplitText = () => {
        return (
            <span >
                {aboutText.split("").map(function(char, index){
                    const style = {"animationDelay": (0.5 + index / 10) + "s", "backgroundColor": 'var(--font-color)', "color": "var(--body-bg-color)", "opacity": "0"};
                        return <span key={index} id={index} className='nav-link' style={style}>{char}</span>
                        ;
                        })}
                        </span>
                    );
                }

    const workText = 'ork';
    const SplitText2 = () => {
        return (
            <span >
                {workText.split("").map(function(char, index){
                    const style = {"animationDelay": (0.5 + index / 10) + "s", "backgroundColor": 'var(--font-color)', "color": "var(--body-bg-color)", "opacity": "0"};
                        return <span key={index} id={index} className='nav-link' style={style}>{char}</span>
                        ;
                        })}
                        </span>
                    );
                }

    const contactText = 'ontact';
    const SplitText3 = () => {
        return (
            <span>
                {contactText.split("").map(function(char, index){
                    const style = {"animationDelay": (0.5 + index / 10) + "s", "backgroundColor": 'var(--font-color)', "color": "var(--body-bg-color)", "opacity": "0"};
                        return <span key={index} id={index} className='nav-link' style={style}>{char}</span>
                        ;
                        })}
                        </span>
                    );
                }

    // hidden text
    const [ isText, setText ] = useState(false);
    const [ isText2, setText2 ] = useState(false);
    const [ isText3, setText3 ] = useState(false);
    
    const showText = () => {
        setText(true);
    }

    const closeText = () => {
        setText(false)
    }

    const showText2 = () => {
        setText2(true);
    }

    const closeText2 = () => {
        setText2(false)
    }

    const showText3 = () => {
        setText3(true);
    }

    const closeText3 = () => {
        setText3(false)
    }

    const showContact = () => {
        console.log('contact button works')
        return (
            <Contact/>
        )
    }



    return (
        <div>
            <button className={button} onClick={handleClick}>
                    <div className='nav-line1'></div>
                    <div className='nav-line2'></div>
                    <div className='nav-line3'></div>
            </button>
            <div className={menu}>
                <div className='menu-content'>
                    <a className='menu-link' href='#about' onMouseEnter={showText} onMouseLeave={closeText}>A{isText && (<SplitText className={about}/>)}</a>
                    <a className='menu-link' href='' onMouseEnter={showText2} onMouseLeave={closeText2}>W{isText2 && (<SplitText2 className={about}/>)}</a>
                    <a className='menu-button' href='' onMouseEnter={showText3} onMouseLeave={closeText3}>C{isText3 && (<SplitText3 className={about}/>)}</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;