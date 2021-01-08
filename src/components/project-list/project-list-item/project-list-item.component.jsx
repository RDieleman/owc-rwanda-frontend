import React from "react";
import "./project-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

export const ProjectListItemComponent = ({id, title, imageUrl, handleOnClick}) => {
    return(
        <div className="container-vertical project-list-item-container"
             onClick={() => handleOnClick(id)}>
            <img src={imageUrl} alt="project-cover"/>
            <div className="container-vertical project-list-item-title-container">
                <PaddingComponent basis="10px"/>
                <div className="container-horizontal">
                    <PaddingComponent type="row"/>
                    <div className="project-list-item-title text-body-sec">
                        {title}
                    </div>
                    <PaddingComponent type="row"/>
                </div>
                <PaddingComponent basis="10px"/>
            </div>
            <PaddingComponent basis="10px"/>
        </div>
    )
}