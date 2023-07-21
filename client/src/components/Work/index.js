import React, { useState } from 'react';
import useCursorPosition from '../useCursorPosition';
import Navigation from '../Navigation';

function Work() {
    const [ position, setPosition] = useCursorPosition();
    const [ isButton, setButton ] = useState(false);

    // use cursor position
    var x = position.clientX;
    var y = position.clientY;

    // show button on mouse hover
    const showButton = () => {
        setButton(true);
    }

    const closeButton = () => {
        setButton(false);
    }

    const viewButtonHandler = () => {
        console.log('CLICKED')
    }


    return (
        <div className='work-container' id='work'>
            <Navigation/>
            <div className='flex-column work-content-container'>
                <div className='flex-row work-content' 
                    onMouseEnter={showButton} 
                    onMouseLeave={closeButton}
                    style={{padding: ''}}
                >
                    <span className='border-bottom'></span>
                    <span>01/</span>
                    <p className='no-underline text-animation'><em>Evoke Neurodiagnostics</em></p>
                    <span className='border-bottom'></span>
                    {isButton && (<button onClick={viewButtonHandler} className='work-img1-container'  style={{left: x - (200/2), top: y - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}><p className='work-button-text'>View</p></button>)}
                </div>  
           

                {/*
                <div className='flex-row work-content' 
                    //onMouseEnter={showDiv} 
                    //onMouseLeave={closeDiv}
                    style={{padding: ''}}
                >
                    <span className='border-bottom'></span>
                    <span>02/</span>
                    <p className='text-animation'><em>Coming Soon</em></p>
                    <span className='border-bottom'></span>
                    {isDiv && (<img className='work-img1-container' src={evokeDesktop} style={{left: x - (200/2), top: y - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}></img>)}
                </div>
                */}
            </div>
            
        </div>   
    )
}

export default Work;