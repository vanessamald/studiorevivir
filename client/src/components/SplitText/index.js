import React from 'react';

// typewriter animation component
const SplitText = ({ text }) => {
  return (
      <span className='text-animation'>
          {text.split("").map(function(char, index){
              const style = {
                  "animationDelay": (3 + index / 5) + "s",
                  };
                  return (
                      <span aria-hidden="true" key={index} id={index} className='' style={style}>
                          {char}
                      </span>
                  );
              })}
              </span>
          );
      };

export default SplitText;