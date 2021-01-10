import React from "react";
import "./donation-list-item.styles.css"
import {PaddingComponent} from "../../layout/padding/padding.component";
import {properties} from "../../../properties";

export const DonationListItemComponent = ({name, message, amount}) => {
    return(
        <div className="container-horizontal donation-list-item-container">
            <div className="container-vertical donation-list-item-info-container">
                <div className="text-body-sec">{name}</div>
                <div className="text-body-thr">{message}</div>
                <PaddingComponent />
            </div>
            <PaddingComponent basis="5px"/>
            <div className="text-body-sec donation-list-item-amount-container">{amount}</div>
        </div>
    )
}