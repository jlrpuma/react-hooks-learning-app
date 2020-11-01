import React, {useState, useEffect} from 'react';
import './App.css';
import randomcolor from 'randomcolor'

function App() {
  const [count, setCount] = useState(0);
  const [alive, setAlive] = useState("Yes");
  const [color, setColor] = useState("")
  

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

  /*
  // 1.
  // every single time that the component is rendered this function is called
  // the setColor method is changing the state and that cause a render that cause an infinite loop
  useEffect(() => {
      // 1.
      // setColor(randomcolor())
  })*/

  /*
    lifecycle: ComponentDidUpdate

  On this time we are specifying when the use effect callback method is going to be executed
    as you can see in the array we add the property count, if the property count have a change 
    then the UseEffect calback method is going to be executed... 
  */
  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  /* 
    lifecycle: ComponentDidMount

    If you want to simulate the componentDidMount Lifecycle woy cant do it in this way 
    the callback code will be executed just every time that the component is mounted
  */
  useEffect(() => {
    setColor(randomcolor())
  }, [])

  /*
    lifecycle: ComponentWillUnmount
    This time we are returning an anon function that will be stored by React and will be executed
    when the component will be unmounted

    the componentWillUnmount is used for clean some logic that can be running after go out the component.
  */
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000);

    return () => clearInterval(intervalId);
    
  }, [])


  return (
      <div>
        <h1 style={{color: color}}>{count}</h1>
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
