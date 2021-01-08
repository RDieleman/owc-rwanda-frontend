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

    handleSelectProject = (id) =>{

    }

    render() {
        console.log("Creating overview for projects:", this.props.projects);
        return(
            <div id="page-container">
                {/*Header*/}
                <HeaderComponent/>
                {/*Container to set horizontal padding*/}
                <div className="container-horizontal">
                    <PaddingComponent type="row"/>
                    {/*Container to set vertical padding*/}
                    <div className="container-vertical">
                        <PaddingComponent type="col"/>
                        <PaddingComponent type="col"/>

                        {/*Container for content*/}
                        <div id="overview-container" className="container-vertical">
                            <div className="text-body">
                                {properties.overviewTextMain}
                            </div>
                            <PaddingComponent type="col"/>
                            <ProjectListComponent
                                handleProjectSelect={this.handleSelectProject}
                                projects={this.props.projects}
                            />
                            <PaddingComponent type="col"/>
                            <div className="text-body">
                                {properties.overviewTextSec}
                            </div>
                            <PaddingComponent type="col"/>
                            <CharityListComponent
                                charities={this.props.charities}/>
                        </div>

                        <PaddingComponent type="col"/>
                    </div>
                    <PaddingComponent type="row"/>
                </div>
            </div>
        )
    }
}

export default ProjectOverviewPage;