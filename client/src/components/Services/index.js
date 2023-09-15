import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Navigation from '../Navigation';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';

function Services() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div className='services-container' >
            <Navigation/>
            <div className='flex-column'>
                <div className='services-landing-container' >
                    <div className='split-text-container flex align-center justify-center work-title'>
                        <SplitText text='Services' fontColor='theme-text-color'/>
                    </div> 
                </div>
                <div className='services-list-container'>
                    <div className='services-subtitle-container' ref={ref}>
                        <p className={`font-classic uppercase subtitle justify-center flex align-center em-med ${inView ? 'slide-in' : ''}`}>Web Design & Development Focused on Brand Image & Identity.</p>
                    </div>
                    <div className='services-list-content' >
                        <ul className='list-none flex-row flex-wrap justify-center' >
                            <li className={`services-list-li ${inView ? 'text-animation' : ''}`}>Mobile-first Responsive Website Design & Development</li>
                            <li className={`services-list-li ${inView ? 'text-animation' : ''}`}>Hosting & Domain Set Up</li>
                            <li className={`services-list-li ${inView ? 'text-animation' : ''}`}>SEO</li>
                            <li className={`services-list-li ${inView ? 'text-animation' : ''}`}>CMS Development (WordPress, SquareSpace)</li>
                            <li className={`services-list-li ${inView ? 'text-animation' : ''}`}>Site Maintenance & Support</li>
                            <li className={`services-list-li ${inView ? 'text-animation' : ''}`}>Social Media Templates</li>
                        </ul>
                    </div>  
                </div>
            </div>
            <div className='services-process-container'> 
                <div className='services-subtitle-container'>
                    <h2 className={`font-classic uppercase subtitle flex align-center em-med ${inView ? 'slide-in' : ''}`}>The Process</h2>
                </div>  
                <div className='flex-row container'>
                    <div className='flex-row flex-wrap'>
                        <h3 className={`font-classic services-process-list ${inView ? 'text-animation' : ''}`} data-delay="0.2s">01/ Discovery</h3>
                        <p className='services-process-list'>I will provide a detailed questionnaire to get to know you and your brand. Schedule an introductory call to answer any questions you may have.</p>
                        <h3 className={`font-classic services-process-list ${inView ? 'text-animation' : ''}`} data-delay="0.2s">02/ Creative Direction</h3>
                        <p className='services-process-list'>With the gathered information I will develop the website design and strategy that align with your brand image & identity. </p>
                        <h3 className={`font-classic services-process-list ${inView ? 'text-animation' : ''}`} data-delay="0.2s">03/ Implementation</h3>
                        <p className='services-process-list'>This is the part of the process where the website will be developed after the Creative Direction is approved. </p>
                        <h3 className={`font-classic services-process-list ${inView ? 'text-animation' : ''}`} data-delay="0.2s">04/ Launch</h3>
                        <p className='services-process-list'>After the website is approved, we will launch & schedule a walk through.</p>
                    </div>
                </div>
            </div>
            <div>
                {/*
                <div>
                    <h2 className='font-classic uppercase services-title'>FAQs</h2>
                </div>
                <div>
                    <p>What can I expect from the website design process?</p>
                        <p>What is a general timeline for a project?</p>
                        <p>What web templates do you work with?</p>
                        <p>What are your terms of service?</p>
                        <p>What if none of the packages are right for me?</p>
                </div>
                */}
            </div>
            {/*
                <div>
                    <div>
                        <h2 className='font-classic uppercase services-title'>The Goods</h2>
                    </div>
                    <div>
                        <h3>01/ Luxe Package</h3>
                        <h4>Website Design & Development + Content Creation</h4>
                        <ul>
                            <li>UX/UI Design</li>
                            <li>Hosting & Domain Set Up</li>
                            <li>SEO</li>
                            <li>Layout Design</li>
                            <li>Site Maintenance & Support</li>
                            <li>Social Media Content (10 Templates)</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <h3>02/ Standard Packet</h3>
                        <h4>Website Design & Development</h4>
                        <ul>
                            <li>UX/UI Design</li>
                            <li>Hosting & Domain Set Up</li>
                            <li>SEO</li>
                            <li>Layout Design (5 Pages)</li>
                            <li>Site Maintenance</li>
                        </ul>
                    </div>
                    <div>
                        <h3>03/ Premium Package</h3>
                        <h4>Website Design & Development + Content Creation</h4>
                        <ul>
                            <li>UX/UI Design</li>
                            <li>Hosting & Domain Set Up</li>
                            <li>SEO</li>
                            <li>Layout Design</li>
                            <li>Site Maintenance & Support</li>
                            <li>Social Media Content (5 Templates)</li>
                            <li></li>
                            <li></li>
                        </ul>
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
                        <p>What are your terms of service?</p>
                        <p>What if none of the packages are right for me?</p>
                    </div>
                </div>
            </div>
            */}   
        </div>
    )
}

export default Services;