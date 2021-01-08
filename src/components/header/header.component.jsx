import React from "react";
import "./header.styles.css";
import {properties} from "../../properties";

export const HeaderComponent = ({}) =>{
    return(
        <header className="header-container">
            <div className="header-title text-title">{properties.title}</div>
        </header>
    )
}