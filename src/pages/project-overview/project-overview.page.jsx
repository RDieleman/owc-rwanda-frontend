import React, {Component} from "react";
import "./project-overview.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ProjectListComponent} from "../../components/project-list/project-list.component";
import {CharityListComponent} from "../../components/charity-list/charity-list.component";


/*
    Page that contains an overview of the existing projects that redirect to the detail page of the project.
    At the bottom also shows a list of alternative charities that redirect to an external website.

    Expects a list of projects and charities and a function to select the project as properties.
 */
class ProjectOverviewPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // Uses the provided function to call back and select a project.
    // Redirects the user to the detail page of the project
    handleSelectProject = (project) =>{
        this.props.handleSelectProject(project);
        this.props.history.push(`${properties.urlProjectDetailPage}/${project.id}`);
    }

    render() {
        return(
            <div id="page-container">
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="container-vertical">

                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Container for content*/}
                        <div id="overview-container" className="container-vertical">
                            <div className="text-body">
                                {/*Main text*/}
                                {properties.overviewTextMain}
                            </div>

                            <PaddingComponent/>

                            {/*List of projects*/}
                            <ProjectListComponent
                                handleProjectSelect={this.handleSelectProject}
                                projects={this.props.projects}
                            />

                            <PaddingComponent/>
                            <PaddingComponent/>

                            {/*Secondary text*/}
                            <div className="text-body">
                                {properties.overviewTextSec}
                            </div>

                            <PaddingComponent/>

                            {/*List of charities*/}
                            <CharityListComponent
                                charities={this.props.charities}/>
                        </div>

                        <PaddingComponent/>
                    </div>
                    <PaddingComponent/>
                </div>
            </div>
        )
    }
}

export default ProjectOverviewPage;