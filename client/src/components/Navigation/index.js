import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Register from '../Register';

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

    // title animation
    const aboutText = 'About';
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

    const workText = 'Work';
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

    const contactText = 'Contact';
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
    return (
        <div>
            <button className={button} onClick={handleClick}>
                    <div className='nav-line1'></div>
                    <div className='nav-line2'></div>
                    <div className='nav-line3'></div>
            </button>
            <div className={menu}>
                <div className='menu-content'>
                    <a className='menu-link' href='/'>Home</a>
                    <a className='menu-link' href='/about'><SplitText className={about}/></a>
                    <a className='menu-link' href='#work'><SplitText2 className={about}/></a>
                    
                    <Contact/>
                    {/*<a className='menu-link' href='#about' onMouseEnter={showText} onMouseLeave={closeText}>{isText && (<SplitText className={about}/>)}About</a>*/}
                    {/*<a className='menu-link' href='' onMouseEnter={showText2} onMouseLeave={closeText2}>{isText2 && (<SplitText2 className={about}/>)}Work</a>*/}
                    {/*<a className='menu-button' href='' onMouseEnter={showText3} onMouseLeave={closeText3}>{isText3 && (<SplitText3 className={about}/>)}Contact</a>*/}  
                </div>
                <div>
                    <div className='border'></div>
                    <Register/>
                </div>
            </div>
            
        </div>
    )
}

export default Navigation;