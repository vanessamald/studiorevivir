import React, { useState, useEffect } from 'react';

function ImageZoom({ imageUrl }) {
    // holds scroll position
    const [ scrollY, setScrollY ] = useState(0);

    // check scroll position from top of container
    const handleScroll = (e) => {
        setScrollY(e.target.scrollTop);
    };
    
    return (
        <div 
            onScroll={handleScroll}
            className='image-zoom-container' 
            style={{ overflowX: 'hidden', height: '600px' }}
        >
            <img 
                src={imageUrl} 
                alt='preview of works'
                style={{
                    transform: `scale(${0.3 + scrollY / 1000}) `,
                    transition: "transform 0.2s ease-out",
                    filter: 'grayscale(1)'
                }}

            >
            </img>
        </div>
    )
}

export default ImageZoom;