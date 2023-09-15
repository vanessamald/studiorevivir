import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useTheme from '../useTheme';
import Navigation from '../Navigation';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';
import Register from '../Register';

function About() {
    const [ theme ] = useTheme();
    const [ scrollY, setScrollY ] = useState(0);

    const animateOnScroll = (e) => {
        setScrollY(e.target.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', animateOnScroll);
        return () => {
          window.removeEventListener('scroll', animateOnScroll);
        };
      }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div className='about-container'>
            <Navigation/>
            <div className=''>
                <div className='split-text-container flex align-center justify-center work-title'>
                    <SplitText text='About' fontColor='theme-text-color'/>
                </div>
            </div>
            <div className='about-content-container' ref={ref}>
                <div className={`${inView ? 'text-animation' : ''}`}>
                    <p >Hi! My name is Vanessa Maldonado, a Freelance Web Developer and the creator of <em className='font-italic bolder em-med'>revívír</em><em className='font-classic uppercase em-small font-normal'>studio</em></p>
                    
                    <p> <em className='font-italic bolder em-med'>revívír</em> in Spanish means to come alive again, to reawaken. <em className='font-italic bolder em-med'>revívír</em><em className='font-classic uppercase em-small font-normal'>studio</em> is a homage to the rebirth of my creativity through web design & development.</p>
                    
                    <p>Well-known for being open and collaborative, leading with compassion, and having an eye for design.</p>

                    <p> I want to help clients elevate their online presence through minimalistic and responsive web applications that showcase their brand.</p> 
                </div>  
                <div className='flex-column about-content'>
                    <h2>Why <em className='font-italic bolder'>revívír</em>?</h2>
                    <p> Enhanced user experience converts to increased engagement by:</p>
                    <ul className='list-none'>
                        <li>Improving SEO and search visibility</li>
                        <li>Enhancing your Brand Perception</li>
                        <li>Competitive Differentiation</li>
                    </ul> 
                    <p className='subtitle subtitle-container large-font font-classic uppercase'>Fall in love with your brand all over again</p>
                </div>
            </div>
            <div>
                <Register/>
            </div>
        </div>    
    )
}

export default About;