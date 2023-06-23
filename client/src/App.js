import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
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
        <Home/>
        {/*
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      */}
      </main>
    
    </div>
  );
}

export default App;
