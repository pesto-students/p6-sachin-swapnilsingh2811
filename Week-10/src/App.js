import React from 'react';
import './App.css';
import { useState } from 'react';
import InputHandler from './components/input';
import BackgroundAnimate from './BackgroundAnimate';
import LinkShortener from './components/linkShorten';
const App=()=>{
  const [inputValue,setinputValue ]=useState('');

  return (
    <div className='container'>
    <InputHandler inputValue={setinputValue}/>
    <BackgroundAnimate/>
    <LinkShortener input={inputValue}/>
    </div>
  );
};


export default App;