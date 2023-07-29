import React, { useState, useEffect } from 'react';

function ImageZoom({ imageSrc, scrollY }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    // update state and scrollY change
    useEffect(() => {
      setScrollPosition(scrollY); 
      //console.log(scrollY);
    }, [scrollY]);

    return (
        <div 
            className='image-zoom-container' 
            style={{
                overflow: 'hidden', // set overflow hidden to contain image 
                height: '800px',
                position: 'relative',
                
              }}
        >
            <img 
                src={imageSrc} 
                alt='Evoke mobile/desktop view'
                style={{
                    transform: `scale(${0.3 + scrollPosition / 2000}) `,
                    transition: "transform 0.2s ease-out",
                    filter: 'grayscale(1)',
                    transformOrigin: '50% 50%', 
                }}
            >
            </img>
        </div>
    )
}

export default ImageZoom;