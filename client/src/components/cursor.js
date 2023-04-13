import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
    const [cursorVariant, setCursorVariant] = useState("default");
    const cursorRef = React.useRef(null);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 100, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
  
    useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 8);
        cursorY.set(e.clientY - 8);
        //cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
    };
    
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
    }, [cursorX, cursorY]);
  
    const variants = {
      default: {
        //x: cursorX,
        //y: cursorY
        position: 'fixed',
        left: '0',
        top: '0',
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '2px solid white',
        backgroundColor: 'transparent',
        mixBlendMode: 'difference',
        zIndex: '99999999999',
        pointerEvents: 'none'
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
  
    useEffect(() => {
        const cursorEnter = () => setCursorVariant('text');
        const cursorLeave = () => setCursorVariant('default');
    },
    [])

    return (
        <motion.div className={cursorVariant} variants={variants} animate={cursorVariant} style={{translateX: cursorXSpring, translateY: cursorYSpring}}
        />
    )
}

export default Cursor;

