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
            image: Evoke
        },
        {
            id: 2,
            title: 'Coming Soon',
            subtitle: '',
            subtitle2: '',
            description: '',
            image: ''
        },
        {
            id: 3,
            title: 'Coming Soon',
            subtitle: '',
            subtitle2: '',
            description: '',
            image: ''
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
    return  <div className='work-hidden-container'>
                <div className='work-hidden-content flex'>
                    <div className='flex-column'>
                            <h1 className='work-title'>{data.title}</h1>
                        <div >
                            <h2 className='work-hidden-subtitle'>{data.subtitle}</h2>
                            <h2 className='work-hidden-subtitle'>{data.subtitle2}</h2>
                        </div> 
                    </div>
                    <p className='work-hidden-text'> 
                        {data.description}
                    </p>
                </div> 
                <div>
                    <p>{/* More Info Here */}</p>
                </div>
                <div className='image-reveal-container'>
                    <ImageZoom imageUrl={data.image}/>
                </div>
            </div>;
  };

export default Work;