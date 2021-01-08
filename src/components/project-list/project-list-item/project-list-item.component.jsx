import React from "react";
import "./project-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

export const ProjectListItemComponent = ({id, title, imageUrl, handleOnClick}) => {
    return(
        <div className="container-vertical project-list-item-container"
             onClick={() => handleOnClick(id)}>
            <img src={imageUrl} alt="project-cover"/>
            <div className="container-vertical project-list-item-title-container">
                <PaddingComponent type="col" styling="project-list-item-title-padding"/>
                <div className="container-horizontal">
                    <PaddingComponent type="row"/>
                    <div className="project-list-item-title text-body-sec">
                        {title}
                    </div>
                    <PaddingComponent type="row"/>
                </div>
                <PaddingComponent type="col" styling="project-list-item-title-padding"/>
            </div>
            <PaddingComponent type="col" styling="project-list-item-title-padding"/>
        </div>
    )
}