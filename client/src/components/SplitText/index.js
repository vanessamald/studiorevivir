import React, { useEffect, useState } from 'react';

// typewriter animation component
const SplitText = ({ text }) => {
  return (
      <span style={{animationDelay: ''}}>
          {text.split("").map(function(char, index){
              const style = {
                  "animationDelay": (0.5 + index / 10) + "s",
                  };
                  return (
                      <span aria-hidden="true" key={index} id={index} className='nav-link' style={style}>
                          {char}
                      </span>
                  );
              })}
              </span>
          );
      };

export default SplitText;