import React from "react";
import "./charity-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

/*
    Component to fill the charity list
    Redirects to provided external url
 */

export const CharityListItemComponent = ({imageUrl, name, description, externalUrl}) =>{
    return(
        //Container with redirect to external website
        <div className="charity-list-item-container container-horizontal"
        onClick={() => window.location.href = externalUrl}>
            {/*Charity logo*/}
            <img src={imageUrl} alt="charity-logo"/>

            <PaddingComponent basis="5px"/>

            {/*Container with charity info*/}
            <div className="container-vertical charity-list-item-info-container">
                {/*Charity name*/}
                <div className="text-body-sec">
                    {name}
                </div>

                <PaddingComponent basis="5px" />

                {/*Short charity description*/}
                <div className="text-body-thr">
                    {description}
                </div>

                <PaddingComponent basis="10px"/>
            </div>
        </div>
    )
}