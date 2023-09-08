import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './PageTransitions.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Cursor from './components/cursor';
import useTheme from './components/useTheme';
import Services from './components/Services';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';

function App() {
  const [ theme, componentMounted ] = useTheme();
  const [ loading, setLoading ] = useState(true);
  

  // set timeout for loading effect and pass as a prop to Preloader
  useEffect(()=> {
    const delay = setTimeout(()=> {
      setLoading(false);
      clearTimeout(delay);
    }, 2000);

    return ()=> clearTimeout(delay);
  }, []);
  

  return (
    <div className={theme}>
    <Cursor/>
      <main className={theme}>
        <BrowserRouter>

          {/*{loading ? <Preloader loading={loading}/> : null}*/}

          <Routes>
                  <Route path='/' element={loading ? <Preloader loading={loading}/> : <Home/>}></Route>
                  <Route path='/about' element={loading ? <Preloader loading={loading}/> : <About/>}></Route>
                  <Route path='/work' element={loading ? <Preloader loading={loading}/> : <Work/>}></Route>
                  <Route path='/inquire' element={loading ? <Preloader loading={loading}/> : <Contact/>}></Route>
                  <Route path='/services' element={loading ? <Preloader loading={loading}/> : <Services/>}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
