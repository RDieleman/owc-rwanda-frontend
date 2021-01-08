import React from "react";
import "./project-list.styles.css";
import {ProjectListItemComponent} from "./project-list-item/project-list-item.component";

export const ProjectListComponent = ({projects, handleProjectSelect}) =>{
    return(
        <div className="project-list-container container-vertical">
            {projects.map(p => {
                return <ProjectListItemComponent
                    handleOnClick={handleProjectSelect}
                    id={p.id}
                    imageUrl={p.image_url}
                    title={p.title}
                    key={p.id}
                />
            })}
        </div>
    )
}