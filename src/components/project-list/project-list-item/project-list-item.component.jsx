import React from "react";
import "./project-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

/*
    List item for projects that contains the title and cover image.
    Will also redirect to the detail page when clicked.

    Used in the project overview pae and project detail page.
 */

export const ProjectListItemComponent = ({title, imageUrl, handleOnClick}) => {
    return(
        //Project container that handles the redirecting to detail page
        <div className="container-vertical project-list-item-container"
             onClick={handleOnClick}>
            {/*Project cover image*/}
            <img src={imageUrl} alt="project-cover"/>

            {/*Info container that contains the project title*/}
            <div className="container-vertical project-list-item-title-container">

                <PaddingComponent basis="10px"/>

                <div className="container-horizontal">

                    <PaddingComponent/>
                    <div className="project-list-item-title text-body-sec">
                        {title}
                    </div>
                    <PaddingComponent/>

                </div>

                <PaddingComponent basis="10px"/>
            </div>
        </div>
    )
}