import React from "react";
import "./button-thr.styles.css";

export const ButtonThrComponent = ({content, handleOnClick}) =>{
    return(
        <button className="button-thr text-body-thr" onClick={() => handleOnClick()}>
            {content}
        </button>
    )
}