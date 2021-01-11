import React from "react";
import "./button-main.styles.css";
import "../button.styles.css";

export const ButtonMainComponent = ({content, handleOnClick}) =>{

    // Main button
    return(
        <button className="button-main text-body" onClick={() => handleOnClick()}>
            {content}
        </button>
    )
}