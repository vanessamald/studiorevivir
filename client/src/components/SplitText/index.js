import React from 'react';

// typewriter animation component
const SplitText = ({ text, fontColor }) => {
  return (
      <span className='text-animation'>
          {text.split("").map(function(char, index){
              const style = {
                  "animationDelay": (1 + index / 5) + "s",
                  };
                  return (
                      <span aria-hidden="true" key={index} id={index} className={fontColor} style={style}>
                          {char}
                      </span>
                  );
              })}
              </span>
          );
      };

export default SplitText;