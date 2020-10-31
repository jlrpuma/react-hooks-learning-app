import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // instead of use an object to store all the values on the state 
  // we can create an independent state for that specific value 
  // with the method useState.
  const [alive, setAlive] = useState("Yes");
  

  function performOperation(operation) {
    setCount(prevCount => {
      if(operation === '+'){
        return prevCount + 1;
      }
      if(operation === '-'){
        return prevCount - 1;
      }
      if(operation === '*'){
        return prevCount * 2;
      }
      if(operation === '/'){
        return prevCount / 2;
      }
      return prevCount;
    })
  }
  
  function changeStatus() {
    setAlive(prevAlive => prevAlive === "Yes" ? "No" : "Yes")
  }

  return (
      <div>
        <h1>{count}</h1>
        <h1>{alive}</h1>
        <button onClick={() => performOperation('+')}>Increment!</button>
        <button onClick={() => performOperation('-')}>Decrement!</button>
        <button onClick={() => performOperation('*')}>Multiply!</button>
        <button onClick={() => performOperation('/')}>Division!</button>
        <button onClick={changeStatus}>Play Status!</button>
      </div>
  );
}

export default App;
