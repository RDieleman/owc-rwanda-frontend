import React from "react";
import "./project-list.styles.css";
import {ProjectListItemComponent} from "./project-list-item/project-list-item.component";
import {PaddingComponent} from "../layout/padding/padding.component";

export const ProjectListComponent = ({projects, handleProjectSelect}) => {

    // Provide list of projects with image and title
    return (
        <div className="project-list-container container-vertical">
            {projects.map(p => {
                return <div key={p.id} className="container-vertical">
                    <ProjectListItemComponent
                        handleOnClick={() => handleProjectSelect(p)}
                        imageUrl={p.imageUrl}
                        title={p.title}
                    />
                    <PaddingComponent basis="5px"/>
                </div>
            })}
        </div>
    )
}