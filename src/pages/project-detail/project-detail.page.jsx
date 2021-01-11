import React, {Component} from "react";
import "./project-detail.styles.css"
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ProjectListItemComponent} from "../../components/project-list/project-list-item/project-list-item.component";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";
import {DonationListComponent} from "../../components/donation-list/donation-list.component";

/*
    Page that shows the details about the selected project.
    The url contains the id of the selected project.

    This page contains the cover image, title, and description of the project.
    Also, a list of recent donations and a button to support the selected project which redirects to the donation page.

    Expects an id as url param and a project as property
 */

class ProjectDetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id //Id of the selected project
        }
    }

    //Redirect to the donation page with the id of the selected project
    handleSupportClick = () => {
        this.props.history.push('/donation/' + this.props.project.id);
    }

    render() {
        let {project} = this.props; //The selected project

        //Redirect back to the menu page if no project is selected
        if (!project) {
            this.props.history.push(properties.urlMenuPage);
        }

        return (
            <div id="page-container">

                {/*The project list item from the overview page to show the cover image and title*/}
                <ProjectListItemComponent
                    handleOnClick={() => {
                    }}
                    imageUrl={project.imageUrl}
                    id={project.id}
                    title={project.title}/>

                {/*Container with the project description and donation list*/}
                <div className="container-horizontal" id="detail-content-container">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>

                        {/*Project description*/}
                        <div className="text-body-sec">
                            {project.description}
                        </div>

                        <PaddingComponent/>
                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*List of recent donations*/}
                        <DonationListComponent
                            donations={this.props.donations}/>
                    </div>
                    <PaddingComponent/>
                </div>

                {/*Button to support the project and redirect to donation page*/}
                <ButtonMainComponent
                    handleOnClick={this.handleSupportClick}
                    content={properties.detailTextBtnDonate}/>
            </div>
        )
    }
}

export default ProjectDetailPage;