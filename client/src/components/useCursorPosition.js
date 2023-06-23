import  React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const useCursorPosition = () => {
    const inputRef = useRef();

    const [ position, setPosition ] = useState({
        clientX: 0,
        clientY: 0,
    });

    const updateMouse = event => {
        const { pageX, pageY, clientX, clientY } = event;
        const { scrollX, scrollY } = window;

        setPosition ({
            clientX: clientX + scrollX,
            clientY: clientY + scrollY
        });
    };

    useLayoutEffect(() => {
        document.addEventListener("mousemove", updateMouse, false);
        document.addEventListener("mouseenter", updateMouse, false);
        return () => {
            document.removeEventListener("mousemove", updateMouse);
            document.removeEventListener("mouseenter", updateMouse);
        };
    }, []);
    return [position, setPosition];
};

export default useCursorPosition;