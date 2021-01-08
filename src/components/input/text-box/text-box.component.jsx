import React from "react";
import "./text-box.styles.css";

export const TextBox = ({placeholder, handleInputChange}) =>{
    return(
        <input
            type="text"
            className="textbox-container text-body-sec"
            onChange={handleInputChange}
            placeholder={placeholder}
        />
    )
}