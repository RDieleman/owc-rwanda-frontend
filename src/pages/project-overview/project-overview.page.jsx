import React, {Component} from "react";
import "./project-overview.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ProjectListComponent} from "../../components/project-list/project-list.component";
import {CharityListComponent} from "../../components/charity-list/charity-list.component";

// Expects an array 'projects'
// and an array 'charities' in props
class ProjectOverviewPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSelectProject = (project) =>{
        this.props.handleSelectProject(project);
        this.props.history.push(`${properties.urlProjectDetailPage}/${project.id}`);
    }

    render() {
        return(
            <div id="page-container">
                {/*Header*/}
                <HeaderComponent/>
                {/*Container to set horizontal padding*/}
                <div className="container-horizontal">
                    <PaddingComponent/>
                    {/*Container to set vertical padding*/}
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Container for content*/}
                        <div id="overview-container" className="container-vertical">
                            <div className="text-body">
                                {properties.overviewTextMain}
                            </div>
                            <PaddingComponent/>
                            <ProjectListComponent
                                handleProjectSelect={this.handleSelectProject}
                                projects={this.props.projects}
                            />
                            <PaddingComponent/>
                            <PaddingComponent/>
                            <div className="text-body">
                                {properties.overviewTextSec}
                            </div>
                            <PaddingComponent/>
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