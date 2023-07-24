import React, { useState } from 'react';
import useCursorPosition from '../useCursorPosition';
import Navigation from '../Navigation';
import ImageZoom from '../ImageZoom';
import Evoke from '../../assets/images/evoke.png';

function Work() {
    const [ position, setPosition] = useCursorPosition();
    const [ isButton, setButton ] = useState(false);
    const [showComponent, setShowComponent] = useState(false);

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
        console.log('CLICKED');
        setShowComponent(!showComponent);
        setButton(false);
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
                    {isButton && ( <button onClick={viewButtonHandler} className='work-button-container'  style={{left: x - (200/2), top: y - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}><p className='work-button-text'>View</p></button>)}
                </div>  
           
                {showComponent ? <ComponentToShow /> : ''}
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

const ComponentToShow = () => {
    return  <div className='work-hidden-container'>
                <div className='work-hidden-content flex'>
                    <div className='flex-column'>
                        <div className='work-hidden-subtitle'>
                            <h2>Branding</h2>
                            <h2>Web Design & Development</h2>
                        </div> 
                    </div>
                    <p className='work-hidden-text'> 
                        Evoke, a cognitive impairment testing services company, was looking to establish 
                        their brand identity in the Healthcare field. 
                        We created a strong and unique brand presence through modern design.
                    </p>
                </div> 
                <div>
                    <p>{/* More Info Here */}</p>
                </div>
                <ImageZoom imageUrl={Evoke}/>

            </div>;
  };

export default Work;