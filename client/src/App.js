import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Cursor from './components/cursor';
import useTheme from './components/useTheme';

function App() {
  const [theme, componentMounted] = useTheme();
 
  if (!componentMounted) {
    return <div/>
  }

  return (
    <div className={theme}>
    <Cursor/>
      <main className={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
      
      </main>
    
    </div>
  );
}

export default App;
