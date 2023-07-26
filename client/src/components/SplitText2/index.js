import React from 'react';

const SplitText2 = ({ text }) => {
    const menuText = 'about';

    return (
        <span className='menu-link-text'>
            {menuText.split("").map(function(char, index){
                const style = {
                    "animationDelay": ( index * 5 ) + "s",
                    
                    };
                    return (
                        <span aria-hidden="true" key={index} id={index} className={`menu-link-letter letter-${index}`} style={style}>
                            {char}
                        </span>
                    );
                })}
                </span>
            );
        };

export default SplitText2;