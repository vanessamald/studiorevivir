import React, { useState, useEffect } from 'react';

function ImageZoom({ imageUrl }) {
    const [ zoom, setZoom ] = useState(1);
    
    const handleScroll = () => {
        const scrollY = window.screenY;
        const newZoomLevel = 1 + scrollY / 500;
        setZoom(newZoomLevel);
        console.log(zoom);
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll();
        };

        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        }
    }, []);

    return (
        <div className='image-zoom-container' >
            <img 
                src={imageUrl} 
                alt='preview of works'
                style={{transform: `scale(${zoom}) `, transition: "transform 1000ms ease-in-out"}}
            >
            </img>
        </div>
    )
}

export default ImageZoom;