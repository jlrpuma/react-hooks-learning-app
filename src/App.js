import React, {useState} from 'react';
import './App.css';


/* The functional component using the method useState provided by react allow us to reduce the amount 
of code used on a class component method */

function App() {
  // it returns an array [null, f()]
  // Array destructuring (the first passed to useState is given to the answer constant)
  const [answer] = useState("No");

  return (
      <div>
        <h1>Is state important to know? : {answer}</h1>
      </div>
  );
}

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       answer: "Yes"
//     };
//   }


//   render() {
//     return (
//         <div>
//           <h1>Is state important to know? : {this.state.answer}</h1>
//         </div>
//     )
//   }

// }

export default App;
