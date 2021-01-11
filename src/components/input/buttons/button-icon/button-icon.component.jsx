import React from "react";
import "./button-icon.styles.css";

export const ButtonIconComponent = ({handleOnClick, iconUrl}) => {

    // Small button with only an icon
    return (
        <button
            className="button-icon"
            onClick={() => handleOnClick()}
        >
            <img src={iconUrl} alt="btn-icon"/>
        </button>
    )
}