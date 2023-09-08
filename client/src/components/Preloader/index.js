import React, { useState, useEffect } from 'react';

function Preloader() {
    const [ loading, setLoading ] = useState(true);

    useEffect(()=> {
        // adding a loading delay
        const loader = setTimeout(() => {
            setLoading(false);
            clearTimeout(loader);
        }, 1000);

        // cleanup function 
        return () => clearTimeout(loader);
    }, [])

    // conditionally render component and remove from DOM if condition is false
    return loading ? <div className='preloader'>Loading...</div> : null;
    
}

export default Preloader;