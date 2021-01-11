import React from "react";
import "./padding.styles.css";

/*
    Component to handle flex box padding
    A basis arg can be provided to override the standard width/height
    f.e. 10px
 */
export const PaddingComponent = ({basis}) => {
    let basisChecked = (basis === undefined)? 'var(--basic-margin)' : basis;

    const style = {
        flexBasis: basisChecked,
        flexGrow: 0,
        flexShrink: 0
    }
    return (
        <div style={style}/>
    )
}
