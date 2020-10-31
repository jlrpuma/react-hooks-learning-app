import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  

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
  
  return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => performOperation('+')}>Increment!</button>
        <button onClick={() => performOperation('-')}>Decrement!</button>
        <button onClick={() => performOperation('*')}>Multiply!</button>
        <button onClick={() => performOperation('/')}>Division!</button>
      </div>
  );
}

export default App;
