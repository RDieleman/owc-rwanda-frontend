import React from "react";
import "./amount-selector.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

/*
    Selector tool used to display predefined amounts on the donation page.
 */
export const AmountSelectorComponent = ({amounts, handleChoice}) => {
    return (
        // Selector tool that displays amount buttons in a row
        <div className="container-horizontal amount-selector-container">
            {amounts.map((a, i) => {
                return <div onClick={() => handleChoice(a)}
                            className="text-body"
                            key={i}>
                    <PaddingComponent basis="10px"/>
                    {a}
                    <PaddingComponent basis="10px"/>
                </div>
            })}
        </div>
    )
}