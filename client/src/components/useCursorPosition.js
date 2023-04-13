import  React, { useState, useEffect, useRef } from 'react';

const useCursorPosition = () => {
    const inputRef = useRef();
    const [ position, setPosition ] = useState({
        clientX: 0,
        clientY: 0,
    });

    const updateMouse = event => {
        const { pageX, pageY, clientX, clientY } = event;

        setPosition ({
            clientX,
            clientY
        });

    };

    useEffect(() => {
        document.addEventListener("mousemove", updateMouse, false);
        document.addEventListener("mouseenter", updateMouse, false);

        return () => {
            document.removeEventListener("mousemove", updateMouse);
            document.removeEventListener("mousemove", updateMouse);
        };
    }, []);
    return [position];
};

export default useCursorPosition;