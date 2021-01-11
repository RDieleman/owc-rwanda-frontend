import React from "react";
import "./num-box.styles.css";
import {TextBox} from "../text-box/text-box.component";

export const NumBox = ({placeholder, handleInputChange, min, max}) => {
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