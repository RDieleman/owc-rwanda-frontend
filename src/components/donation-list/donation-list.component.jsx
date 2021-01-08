import React from "react";
import "./donation-list.styles.css"
import {DonationListItemComponent} from "./donation-list-item/donation-list-item.component";

export const DonationListComponent = ({donations}) => {
    return (
        <div className="donation-list-container container-vertical">
            {donations.map((d, i) => {
                return <DonationListItemComponent
                    name={d.name}
                    message={d.message}
                    amount={d.amount}
                    key={i}
                />
            })}
        </div>
    )
}