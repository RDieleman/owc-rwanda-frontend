import React from "react";
import "./charity-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

export const CharityListItemComponent = ({imageUrl, name, description, externalUrl}) =>{
    return(
        <div className="charity-list-item-container container-horizontal"
        onClick={() => window.location.href = externalUrl}>
            <img src={imageUrl} alt="charity-logo"/>
            <PaddingComponent type="row" styling="charity-list-item-padding-main"/>
            <div className="container-vertical charity-list-item-info-container">
                <div className="text-body-sec">
                    {name}
                </div>
                <PaddingComponent type="col" styling="charity-list-item-padding-main"/>
                <div className="text-body-thr">
                    {description}
                </div>
                <PaddingComponent type="col" styling="charity-list-item-padding-sec"/>
            </div>
        </div>
    )
}