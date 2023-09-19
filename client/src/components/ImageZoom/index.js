import React, { useState, useEffect } from 'react';

function ImageZoom({ imageSrc, scrollY, alt }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    // update state and scrollY change
    useEffect(() => {
      setScrollPosition(scrollY); 
    }, [scrollY]);

    return (
        <div 
            className='image-zoom-container' 
            style={{
                overflow: 'hidden', // set overflow hidden to contain image 
                /*height: '90vh',*/
                width: '100vw',
                position: 'relative',
                
              }}
        >
            <img 
                className='image-zoom'
                src={imageSrc} 
                alt={alt}
                style={{
                    //transform: `scale(${0.1 + scrollPosition / 3000}) `,
                    transition: "transform 0.2s ease-out",
                    
                    //filter: 'grayscale(1)',
                    transformOrigin: '50% 100%', 
                    transform: `translate(0%, ${scrollPosition / -40 + '%'}) translate3d(0px, 0px, 0px) scale(${0.3 + scrollPosition / 1000}, ${0.3 + scrollPosition / 1000})`
                }}
            >
            </img>

            
        </div>
    )
}

export default ImageZoom;