import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
      <div>
        <h1>{count}</h1>
        {/* Manipulation the State 
          anon function needed on the event onClick
          usage of the function provided by the React.useState method
          usage of the prev{State} and set a new value
        */}
        <button onClick={() => {setCount(prevCount=> prevCount+1)}}>Change!</button>
      </div>
  );
}

export default App;
