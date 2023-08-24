import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';

function Services() {
    return (
        <div className='services-container'>
            <Navigation/>
            <div className='services-content'>
                <h2 className='font-classic uppercase'>Services</h2>
                <p>Website Design & Development</p>
                <ul>
                    <li>Website Design</li>
                    <li>Hosting & Domain Set Up</li>
                    <li>SEO</li>
                    <li>Site Maintenance</li>
                    <li>Social Media</li>
                </ul>
                    {/* More Info Here 
                    <ul>
                    <li>Web Development:</li>
                    <p>Responsive and mobile friendly applications</p>
                    <li>Content Creation</li>
                    <li>Search Engine Optimization(SEO)</li>
                    <li>Accessibility Design</li>
                    <p></p>
                </ul> 
                    */}
                 

                <h2 className='font-classic uppercase'>FAQs</h2>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Services;