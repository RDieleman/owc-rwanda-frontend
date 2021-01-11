import React from "react";
import "./donation-list-item.styles.css"
import {PaddingComponent} from "../../layout/padding/padding.component";

/*
    Component that fills the donation list.
    Contains name, message, and amount of a donation.
 */

export const DonationListItemComponent = ({name, message, amount}) => {
    return(
        //Donation container
        <div className="container-horizontal donation-list-item-container">
            {/*Donation info*/}
            <div className="container-vertical donation-list-item-info-container">
                <div className="text-body-sec">{name}</div>
                <div className="text-body-thr">{message}</div>
                <PaddingComponent />
            </div>

            <PaddingComponent basis="5px"/>

            {/*Donation amount*/}
            <div className="text-body-sec donation-list-item-amount-container">{amount}</div>
        </div>
    )
}