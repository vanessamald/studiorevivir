import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import SplitText from '../SplitText';

function Services() {
    return (
        <div className='services-container'>
            <Navigation/>
            <div className='services-content'>
                <div className='split-text-container flex align-center justify-center work-title'>
                    <SplitText text='Services' fontColor='theme-text-color'/>
                </div>
                <p className='font-classic uppercase services-title'>Website Design & Development</p>
                <ul>
                    <li>Mobile-first Responsive Website Design & Development</li>
                    <li>CMS Development (WordPress, SquareSpace)</li>
                    <li>Hosting & Domain Set Up</li>
                    <li>SEO</li>
                    <li>Site Maintenance & Support</li>
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
                <div>
                    <h2 className='font-classic uppercase services-title'>FAQs</h2>
                </div>
                <div>
                    <p>What can I expect from the website design process?</p>
                    <p>What is a general timeline for a project?</p>
                    <p>What web templates do you work with?</p>
                    <p></p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Services;