import React from 'react';
import useTheme from '../useTheme';
import idark from '../../assets/images/i-dark.png';
import ilight from '../../assets/images/i-light.png';
import Navigation from '../Navigation';

function About() {
    const [ theme ] = useTheme();

    return (
        <div className='about-container'>
            <Navigation/>
            <div className='flex-column justify-center'>
                <h2 className='about-i-title text-animation' style={{animationDelay: '0.5s'}}>Web Design & Development Focused on Brand</h2>
            </div>
            <div className='flex-row justify-center'>
                <img alt='light or dark theme icon' className='about-i bkg-transparent text-animation' src={theme === 'dark' ? ilight : idark}></img>
                <div className='about-i-container flex-column justify-center bkg-transparent'>
                    <h2 className='about-i-content bkg-transparent text-animation' style={{animationDelay: '1.5s'}}>mage</h2>
                    <h2 className='about-i-content bkg-transparent text-animation' style={{animationDelay: '2s'}}>&</h2>
                    <h2 className='about-i-content bkg-transparent text-animation' style={{animationDelay: '2.5s'}}>dentity</h2>
                    {/*<h2 className='about-i-content bkg-transparent text-animation' style={{animationDelay: '2.5s'}} >Brand</h2>*/}
                </div>
                <div>
                <div>
                    <h2>Behind the Brand</h2>
                    <p>
                        If you are new here my name is Vanessa, I love creating content wether it's for myself or my brand. 
                    </p>
                </div>
                <div>
                    <h2>Why revivir?</h2>
                    <p>
                        In Spanish revívír means to come alive again, to reawaken. After discovering Web Development, 
                        my creativity was reawakened and I wanted to commemorate my excitement for this new career path with a fitting name.
                    </p>
                    <p>
                        {/* More Info Here */}
                    </p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default About;