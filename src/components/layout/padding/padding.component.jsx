import React from "react";
import "./padding.styles.css";

export const PaddingComponent = ({type}) => {
    let className;

    switch (type){
        case "col":
            className = "padding-col";
            break;
        case "row":
        default:
            className = "padding-row";
            break;
    }

    return (
        <div className={className}/>
    )
}
