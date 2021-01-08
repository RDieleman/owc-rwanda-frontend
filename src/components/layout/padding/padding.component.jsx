import React from "react";
import "./padding.styles.css";

export const PaddingComponent = ({type, styling}) => {
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

    if(styling){
        className += ` ${styling}`
    }

    return (
        <div className={className}/>
    )
}
