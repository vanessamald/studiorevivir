import React from 'react';

// typewriter animation component
const SplitText = ({ text }) => {
    return (
        <span>
            {text.split("").map(function(char, index){
                const style = {
                    "animationDelay": (0.5 + index / 10) + "s",
                    "backgroundColor": 'var(--font-color)', 
                    "color": "var(--body-bg-color)", 
                    "opacity": "0"
                    };
                    return (
                        <span key={index} id={index} className='nav-link' style={style}>
                            {char}
                        </span>
                    );
                })}
                </span>
            );
        };

export default SplitText;