import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  function increment() {
    /* 
    usage of the function provided by the React.useState method
    usage of the prev{State} and set a new value
    */
    setCount(prevCount => prevCount +1);
  }
  
  return (
      <div>
        <h1>{count}</h1>
        {/* Manipulation the State 
          anon function needed on the event onClick
          calling an increment function (a function inside of our functional component this looks more organized)
        */}
        <button onClick={increment}>Change!</button>
      </div>
  );
}

export default App;
