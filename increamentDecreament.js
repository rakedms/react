import './App.css';
import {useState} from 'react';

import React from 'react';

const App = () => {
  const[counter, setCounter] = useState(0);
  const increament = () =>{
    setCounter(x => ++x) 
  }
  const decreament = () => {
    setCounter(x => --x)
  }
  return (
    <div className="App">
      <button onClick={increament}>+</button>
      <h1>{counter}</h1>
      <button onClick={decreament}>-</button>
    </div>
  );
}

export default App;
