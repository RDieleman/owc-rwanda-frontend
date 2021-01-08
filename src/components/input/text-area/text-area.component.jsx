import React from "react";
import "./text-area.styles.css"

export const TextArea = ({placeholder, handleInputChange}) =>{
    return(
        <textarea
            className="text-body-sec text-area-container"
            onChange={handleInputChange}
            placeholder={placeholder}
            rows={1}
            />
    )
}