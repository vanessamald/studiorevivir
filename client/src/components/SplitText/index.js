import React, { useEffect, useState } from 'react';

// typewriter animation component
const SplitText = ({ text }) => {
  return (
      <span>
          {text.split("").map(function(char, index){
              const style = {
                  "animationDelay": (2 + index / 15) + "s",
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