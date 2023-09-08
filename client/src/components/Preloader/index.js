import React, { useState, useEffect } from 'react';

function Preloader({ loading }) {
    // conditionally render component and remove from DOM if condition is false
    return  (
        loading ? 
            <div className='preloader-container'> 
                <div className='preloader'></div></div> 
        : null
)}

export default Preloader;