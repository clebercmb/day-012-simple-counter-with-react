import React from 'react';
import ReactDOM from 'react-dom';
import "./reset.css"
import './index.css';
import SecondesCounter from './components/SecondsCounter';
import * as serviceWorker from './serviceWorker';
//import "bootstrap";


let count = 0;

setInterval(() => {
    const six   = Math.floor(count / 100000) %10
    const five  = Math.floor(count / 10000) %10
    const four  = Math.floor(count / 1000) %10
    const three = Math.floor(count / 100) %10
    const two   = Math.floor(count / 10) %10
    const one   = count % 10 
    count++
    //console.log(count++)
    
    ReactDOM.render(< SecondesCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, document.getElementById('root'));    
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
