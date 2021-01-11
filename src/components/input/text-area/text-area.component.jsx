import React from "react";
import "./text-area.styles.css"

export const TextArea = ({placeholder, handleInputChange}) =>{
    // Text area input
    return(
        <textarea
            className="text-body-sec text-area-container"
            onChange={handleInputChange}
            placeholder={placeholder}
            rows={1}
            />
    )
}