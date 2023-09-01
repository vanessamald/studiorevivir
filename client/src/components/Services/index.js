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
                <div>
                    <p className='font-classic uppercase services-title'>Website Design & Development</p>
                    <ul className='services-list'>
                        <li>Mobile-first Responsive Website Design & Development</li>
                        <li>Accessibility Focused Design</li>
                        <li>CMS Development (WordPress, SquareSpace)</li>
                        <li>Hosting & Domain Set Up</li>
                        <li>SEO</li>
                        <li>Site Maintenance & Support</li>
                        <li>Social Media</li>
                    </ul>
                </div>
                
                    
                <div>
                    <div>
                        <h2 className='font-classic uppercase services-title'>The Process</h2>
                    </div>
                    <div>
                        <p>01/ Discovery</p>
                        <p>I will provide a detailed questionnaire to get to know you and your brand. Schedule an introductory call to answer any questions you may have.</p>
                        <p>02/ Creative Direction</p>
                        <p>With the gathered information I will develop the website design and strategy that align with your brand image & identity. </p>
                        <p>03/ Implementation</p>
                        <p>This is the part of the process where the website will be developed after the Creative Direction is approved. </p>
                        <p>04/ Launch</p>
                        <p>After the website is approved, we will launch & schedule a walk through.</p>
                    </div>
                </div>
                <div>
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
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Services;