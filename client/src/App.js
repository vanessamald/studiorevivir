import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './PageTransitions.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Cursor from './components/cursor';
import useTheme from './components/useTheme';

function App() {
  const [theme, componentMounted] = useTheme();

  //console.log(componentMounted);

  const [isMounted, setIsMounted] = useState(false);

  console.log(isMounted);

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true when the component mounts
    return () => {
      setIsMounted(false); // Set isMounted to false when the component will unmount
    };
  }, []);
 
  //if (!componentMounted) {
   // return <div/>
  //}

  return (
    <div className={theme}>
    <Cursor/>
      <main className={theme}>
        <BrowserRouter>
          <Routes>
                  <Route path='/' className={isMounted ? 'page-enter' : 'page-exit'} element={<Home/>}></Route>
                  <Route path='/about' className={isMounted ? 'page-enter' : 'page-exit'} element={<About/>}></Route>
                  <Route path='/work' className={isMounted ? 'page-enter' : 'page-exit'} element={<Work/>}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
