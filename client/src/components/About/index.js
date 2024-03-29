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
            <div className='about-content-container' >
                <div>
                    <div className='about-subtitle-container'>
                        <p className='font-classic large-font text-animation'>Vanessa Maldonado is a Freelance Web Developer and the creator of <em className='font-italic bolder'>revívír</em><em className='font-classic uppercase font-normal medium-font'>studio</em></p>
                    </div>
                    <div className='about-subtitle-container' ref={ref}>
                        <p className={`font-classic medium-font ${inView ? 'slide-in' : ''}`}> <em className='font-italic bolder'>revívír</em> in Spanish means to come alive again, to <em>reawaken</em>.</p>
                        <div className='container'></div>
                        <p className={`font-classic medium-font ${inView ? 'slide-in-right' : ''}`}><em className='font-italic bolder'>revívír</em><em className='font-classic uppercase font-normal em-med'>studio</em> is a web design and development studio focused on elevating the online presence of small businesses through minimalistic designs that <em style={{backgroundColor: 'transparent'}}>recapture</em> their brand <em style={{backgroundColor:'transparent'}}>essence</em>.</p>
                    </div>
                </div> 
                <div className='about-subtitle-container-alternate'>
                    <h2 className='em-med slide-in' style={{animationDelay:'2s'}}>Why <em className='font-italic bolder'>revívír</em>?</h2> 
                    {/*<p className='font-classic em-med'> <em className='em-med'>"</em>I want to help clients <em className='em-med'>elevate</em> their online presence through <em className='em-med'>artistic</em> and <em className='em-med'>seamless</em> designs that <em className='em-med'>showcase</em> their brand.<em className='em-med'>"</em></p> */}
                    <p className='font-classic em-med text-animation' style={{animationDelay: '2s'}}> <em className='large-font'>"</em>I want to help clients fall in love with their brand <em className='em-med'>all over again.</em><em className='large-font'>"</em></p> 
                </div>
            </div>
            <div>
                <Register/>
            </div>
        </div>    
    )
}

export default About;