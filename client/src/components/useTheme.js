import React, { useEffect, useState } from "react";

function useTheme () {
    // set theme styles
    const [ isOn, setIsOn ] = useState('toggleDark');
    const [ theme, setTheme ] = useState('dark');
    const [ cursor, setCursor ] = useState('cursor-dark');
    const [ logo, setLogo ] = useState('logo-dark');
    const [ componentMounted, setComponentMounted ] = useState(false);


// set localstorage for theme and setTheme/toggler class    
const themeToggler = () => {
    
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        window.localStorage.setItem('toggler', 'toggleLight');
        setTheme('light');
        setIsOn('toggleLight');
        setLogo('logo-light')
        //console.log('THEME IS LIGHT');
    } 
    else { 
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'toggleDark');
        window.localStorage.setItem('cursor', 'dark');
        setTheme('dark');
        setIsOn('toggleDark');
        setLogo('logo-dark')
    } 
}

// get local storage for theme, toggler, and cursor
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localToggler = window.localStorage.getItem('toggler');
    if (localTheme) {
        setTheme(localTheme);
        setIsOn(localToggler);
    } else {
        setTheme('dark')
        setIsOn('toggleDark');
        setCursor('cursor-dark');
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'toggleDark');
    } 
    setComponentMounted(true);
},
[])
return [ theme, themeToggler, componentMounted, isOn, logo  ]
};

export default useTheme;