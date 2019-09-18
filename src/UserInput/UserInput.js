import React from "react";
import "./UserInput.css";

const userInput = (props) => {
    return (
        <input 
            onChange={props.onInputChanged} 
            className="UserInput" 
            value={props.value}
            type="text" />    
    )
}

export default userInput;