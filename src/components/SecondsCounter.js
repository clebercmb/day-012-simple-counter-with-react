import React from "react"
import "./SecondsCounter.css"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function SecondsCounter(props)   {

    return (
    <div className="bigCounter">
        <div className="calender">
           
        <FontAwesomeIcon icon={faClock}/>
        </div>
        <div className="six">{props.digitSix}</div>
        <div className="five">{props.digitFive}</div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
            
    </div>

    )
}

SecondsCounter.prototype = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}


export default SecondsCounter