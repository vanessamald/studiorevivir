import React, { useState } from 'react';
import useCursorPosition from '../useCursorPosition';
import Navigation from '../Navigation';
import ImageZoom from '../ImageZoom';
import Evoke from '../../assets/images/evoke.png';

function Work() {
    const [ position, setPosition] = useCursorPosition();
    const [ isButton, setButton ] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [ showComponent2, setShowComponent2 ] = useState(false);

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

    const viewButtonHandler2 = () => {
        console.log('CLICKED');
        setShowComponent2(!showComponent2);
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
                    <button onClick={viewButtonHandler} className='work-button no-underline text-animation'><em>Evoke Neurodiagnostics</em></button>
                    <span className='border-bottom'></span>
                    {isButton && ( <div className='work-button-container'  style={{left: x - (200/2), top: y - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}><p className='work-button-text'>View</p></div>)}
                </div> 
                <div className='flex-row work-content' 
                    onMouseEnter={showButton} 
                    onMouseLeave={closeButton}
                    style={{padding: ''}}
                >
                    <span className='border-bottom'></span>
                    <span>02/</span>
                    <button onClick={viewButtonHandler2} className='work-button no-underline text-animation'><em>Coming Soon</em></button>
                    <span className='border-bottom'></span>
                    {isButton && ( <div className='work-button-container'  style={{left: x - (200/2), top: y - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}><p className='work-button-text'>View</p></div>)}
                </div>  
           
                {showComponent ? <ComponentToShow /> : ''}
                {showComponent2 ? <ComponentToShow2 /> : ''}
           
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
                <div className='image-reveal-container'>
                    <ImageZoom imageUrl={Evoke}/>
                </div>
            </div>;
  };

  const ComponentToShow2 = () => {
    return <div>
        <p>CONTENT COMING SOON!</p>
    </div>
  }

export default Work;