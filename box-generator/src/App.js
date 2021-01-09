import React, { useState } from 'react';
import './App.css';
import InputSquare from './components/InputSquare';
import DisplayBox from './components/DisplayBox';


function App() {
  const [ state, setState ] = useState({
    boxes: []
  });
  console.log("State:");
  console.log(state);
  return (
    <div className="App">
      <InputSquare inputs={state} setInputs={setState} />
      <DisplayBox boxes={state} />
    </div>
  );
}

export default App;
