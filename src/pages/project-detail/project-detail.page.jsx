import React, {Component} from "react";
import "./project-detail.styles.css"
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ProjectListItemComponent} from "../../components/project-list/project-list-item/project-list-item.component";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";
import {DonationListComponent} from "../../components/donation-list/donation-list.component";

class ProjectDetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    handleSupportClick = () => {
        this.props.history.push('/donation/' + this.props.project.id);
    }

    render() {
        const {project} = this.props;
        return (
            <div id="page-container">
                <HeaderComponent/>
                <ProjectListItemComponent
                    handleOnClick={() => {
                    }}
                    imageUrl={project.image_url}
                    id={project.id}
                    title={project.title}/>
                <div className="container-horizontal" id="detail-content-container">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <div className="text-body-sec">
                            {project.description}
                        </div>
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <DonationListComponent
                            donations={this.props.donations}/>
                        </div>
                    <PaddingComponent/>
                </div>
                <ButtonMainComponent
                    handleOnClick={this.handleSupportClick}
                    content={properties.detailTextBtnDonate}/>
            </div>
        )
    }
}

export default ProjectDetailPage;