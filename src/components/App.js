import React from 'react';
import logo from '../img/logo.svg';
import './App.css';
import SecondsCounter from "./SecondsCounter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SecondsCounter digitOne={0} digitTwo={0} digitThree={0} digitFour={0} digitFive={0} digitSix={0}/>
      </header>
    </div>
  );
}


export default App;
