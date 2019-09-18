import React, { useState } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {

  const [state, setstate] = useState({
    userName: 'Init User Name, chane the input to change userName'
  })

  const inputChangedHandler = (event) => {
    const newValue = event.target.value;
    setstate({
      ...state,
      userName: newValue
    })
  }

  return (
    <div className="App">
      <UserInput value={state.userName} onInputChanged={inputChangedHandler}/>
      <UserOutput userName={state.userName} />
    </div>
  );
}

export default App;
