import React from "react";
import "./button-sec.styles.css";

export const ButtonSecComponent = ({content, iconLocation, handleOnClick}) =>{
    return(
        <button className="button-sec text-body-sec" onClick={() => handleOnClick()}>
            {content}
            {/*Add icon if location is included*/}
            {(iconLocation === undefined)? "" :
                // todo: replace with svg and set color in css file
                <img src={iconLocation} alt="btn-icon"/>}
        </button>
    )
}