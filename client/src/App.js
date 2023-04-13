import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { motion, useMotionValue, useSpring } from "framer-motion";
import {ReactComponent as RevivirLogo } from '../src/assets/images/revivirlogo.svg';
import Cursor from './components/cursor';
import useCursor from './components/cursor';
import useTheme from './components/useTheme';

function App() {
  const [theme, toggleTheme, cursor, componentMounted] = useTheme();
  {/*const [cursorVariant, setCursorVariant] = useState("default");

  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
  };
  
  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
  }, []);

  const variants = {
    default: {
      //x: cursorX,
      //y: cursorY
    },
    text: {
     // x: cursorX,
     // y: cursorY,
      width: 60,
      height: 60,
      borderRadius: '30px',
      backgroundColor: 'white',
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => setCursorVariant('text');
const textLeave = () => setCursorVariant('default');*/}
  if (!componentMounted) {
    return <div/>
  }

  return (
    <div className={theme}>
    {/*<motion.div className='cursor' variants={variants} animate={cursorVariant} style={{translateX: cursorX, translateY: cursorY}}/>*/}
    <Cursor/>
      <main className={theme}>
      {/*<h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Hello</h1>*/}
       
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </main>
    
    </div>
  );
}

export default App;
