import React, { useState, useEffect } from 'react';

function ImageZoom({ imageUrl }) {
    const [ scrollY, setScrollY ] = useState(0);

    const handleScroll = (e) => {
        setScrollY(e.target.scrollTop);
    };
    
    return (
        <div 
            onScroll={handleScroll}
            className='image-zoom-container' 
            style={{ overflow: 'auto', height: '400px' }}
        >
            <img 
                src={imageUrl} 
                alt='preview of works'
                style={{transform: `scale(${1 + scrollY / 1000}) `, transition: "transform 0.2s ease-out"}}
            >
            </img>
        </div>
    )
}

export default ImageZoom;