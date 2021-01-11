import React from "react";
import "./num-box.styles.css";

export const NumBox = ({placeholder, handleInputChange, min, max}) => {

    // Numeric input box
    return (
        <input
            type="number"
            className="num-box-container text-body-sec"
            onChange={handleInputChange}
            placeholder={placeholder}
            min={min}
            max={max}
        />
    )
}