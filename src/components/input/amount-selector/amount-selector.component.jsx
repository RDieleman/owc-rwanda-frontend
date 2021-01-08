import React from "react";
import "./amount-selector.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

export const AmountSelectorComponent = ({amounts, handleChoice}) => {
    return (
        <div className="container-horizontal amount-selector-container">
            {amounts.map(a => {
                return <div onClick={() => handleChoice(a)}
                            className="text-body">
                    <PaddingComponent basis="10px"/>
                    {a}
                    <PaddingComponent basis="10px"/>
                </div>
            })}
        </div>
    )
}