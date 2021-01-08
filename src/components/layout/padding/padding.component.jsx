import React from "react";
import "./padding.styles.css";

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
