import React, { useState } from 'react';
import useCursorPosition from '../useCursorPosition';
import Navigation from '../Navigation';
import ImageZoom from '../ImageZoom';
import Evoke from '../../assets/images/evoke-desktop1.png';
import EvokeMobile from '../../assets/images/evoke-phone1.png';
import SplitText from '../SplitText';

function Work() {
    const [ position, setPosition] = useCursorPosition();
    const [ isButton, setButton ] = useState(false);
    const [showComponent, setShowComponent] = useState(false);

    // use cursor position
    var x = position.clientX;
    var y = position.clientY;

    // show view button on mouse hover
    const showButton = () => {
        setButton(true);
    }

    const closeButton = () => {
        setButton(false);
    }

    // work data array
    const workData = [
        {
            id: 1,
            title: 'Evoke',
            subtitle: 'Web Design & Development',
            subtitle2: 'Branding',
            description: 'Evoke, a cognitive impairment testing services company, was looking to establish their brand identity in the Healthcare field. We created a strong and unique brand presence through modern design.',
            features:['custom cursor', 'dark mode', 'contact form', 'animations'],
            desktopImage: Evoke,
            mobileImage: EvokeMobile,
            link: 'https://www.evokediagnostics.com/',
            alt: 'Evoke mobile/desktop view'
        },
        
        {
            id: 2,
            title: 'Coming Soon',
            subtitle: '',
            subtitle2: '',
            description: '',
            features: [''],
            desktopImage: '',
            mobileImage: ''
        },
        {
            id: 3,
            title: 'Coming Soon',
            subtitle: '',
            subtitle2: '',
            description: '',
            features: [''],
            desktopImage: '',
            mobileImage: ''
        }
        
    ]

    // handle view button click for each work
    const viewButtonHandler = (id) => {
        console.log('CLICKED WORK BUTTON');
        setShowComponent(id);
        setButton(false);
    }

    return (
        <div className='work-container' id='work'>
            <Navigation/>
            <div className=''>
                    <div className='split-text-container flex align-center justify-center work-title'>
                        <SplitText text='Archives' fontColor='theme-text-color'/>
                    </div>
            </div>
            <div className='flex-column work-content-container'>
                
                {workData.map((data) => (
                <div 
                    key={data.id}
                    className='flex-row work-content' 
                    onMouseEnter={showButton} 
                    onMouseLeave={closeButton}
                    style={{padding: ''}}
                >
                    <span className='border-bottom'></span>
                    <span>{data.id}/</span>
                    <button 
                        onClick={() => viewButtonHandler(data.id)}
                        className='work-button no-underline text-animation'
                        // add animationDelay based on id
                        style={{animationDelay: `${data.id}` + 's'}}
                    >
                        <em>{data.title}</em>
                    </button>
                    <span className='border-bottom'></span>
                    {isButton && ( <div className='work-button-container'  style={{left: x - (200/2), top: y - (200/2), position: 'absolute', height: '100%', width: '100%', zIndex: '999999' }}><p className='work-button-text'>View</p></div>)}
                </div>  
            ))}
                {showComponent ? <ComponentToShow data={workData.find((data) => data.id === showComponent)} /> : ''}
            </div>
        </div>   
    )
}

// show work data content
const ComponentToShow = ({ data }) => {
    // state for scroll position 
    const [scrollY, setScrollY] = useState(0);

    // check scroll position from top of container
    const handleScroll = (e) => {
    setScrollY(e.target.scrollTop);

    //console.log(scrollY);
    };

    // Get the window width and set image source
    const screenWidth = window.innerWidth;
    const imageSrc = screenWidth <= 768 ? data.mobileImage : data.desktopImage;

    return  <div 
                className='work-hidden-container' 
                onScroll={handleScroll} 
                style={{
                    overflow: 'auto', // Create a scrollable area within the container to trigger onScroll in hidden container
                    height: ''}}
                >
                <div className='work-hidden-content flex' >
                    <div className='flex-column'>
                        <div className='work-title'>
                            <SplitText text={data.title} fontColor='theme-text-color'/>
                        </div>
                        <div>
                            <h2 className='work-hidden-subtitle'>{data.subtitle}</h2>
                            <h2 className='work-hidden-subtitle'>{data.subtitle2}</h2>
                        </div> 
                    </div>
                    <div className='flex-column'>
                        <p className='work-hidden-text'> 
                            {data.description}
                        </p>

                        
                        <div className='features-container'>
                        <h2>Key Features:</h2>
                        <ul className='features-list'>
                            {data.features.map(function(feature, id) {
                            //console.log(feature);
                                return (
                                    <li key={id}>{feature}</li>
                                )
                            })}
                        </ul>
                    </div>

                    </div> 
                </div> 
                
                <div className='image-reveal-container'>
                    <a href={data.link} target='_blank' style={{backgroundColor: 'transparent'}}><ImageZoom imageSrc={imageSrc} scrollY={scrollY} alt={data.alt}/></a>
                    
                </div>
                
            </div>;
  };

export default Work;