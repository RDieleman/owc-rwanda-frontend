import React from "react";
import "./button-thr.styles.css";

export const ButtonThrComponent = ({content, handleOnClick}) =>{

    // Button that is displayed as only an underlined url
    return(
        <button className="button-thr text-body-thr" onClick={() => handleOnClick()}>
            {content}
        </button>
    )
}