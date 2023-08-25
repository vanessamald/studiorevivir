import React, { useState, useEffect } from 'react';
import useTheme from '../useTheme';
import idark from '../../assets/images/i-dark.png';
import ilight from '../../assets/images/i-light.png';
import Navigation from '../Navigation';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';

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

    return (
        <div className='about-container'>
            <Navigation/>
            <div>
                
            <div className='flex-column justify-center'>
                <h2 className='about-i-title text-animation font-classic uppercase' style={{animationDelay: '0.5s'}}>Web Design & Development Focused on Brand</h2>
            </div>
            <div className='flex-row justify-center' onScroll={animateOnScroll}>
                <img 
                    alt='light or dark theme icon' 
                    className={`about-i bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`} 
                    src={theme === 'dark' ? ilight : idark}
                >
                </img>
                <div className='about-i-container flex-column justify-center bkg-transparent'>
                    <h2  
                        className={`about-i-content bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`}
                        style={{animationDelay: '1.5s'}}
                    >
                        mage
                    </h2>
                    <h2 
                        className={`about-i-content bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`}
                        style={{animationDelay: '2s'}}
                    >
                        &
                    </h2>
                    <h2 
                        className={`about-i-content bkg-transparent ${animateOnScroll ? 'text-animation' : ''}`}
                        style={{animationDelay: '2.5s'}}
                    >
                        dentity
                    </h2>
                    {/*<h2 className='about-i-content bkg-transparent text-animation' style={{animationDelay: '2.5s'}} >Brand</h2>*/}
                </div>
            </div>
            </div>
            <div className='flex-column justify-center about-content'>
                <div>
                    <h2>Behind the Brand</h2>
                    <p>
                        If you are new here my name is Vanessa, I love creating content whether it's for myself or my brand.
                        In Spanish <em className='font-italic bolder'>revívír</em> means to come alive again, to reawaken. After discovering Web Development, 
                        my creativity was reawakened and I wanted to commemorate my excitement for this new career path with a fitting name. 
                    </p>
                </div>
                <div>
                    <h2>Why <em className='font-italic bolder'>revívír</em>?</h2>
                    <p> Attract more clients!</p>
                    <p> Enhanced user experience converts to increased engagement by:</p>
                    <ul>
                        <li>Improving SEO and search visibility</li>
                        <li>Enhancing your Brand Perception</li>
                        <li>Competitive Differentiation</li>
                    </ul> 
                    <p>
                        You will have an edge over the competition.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default About;