import React, {Component} from "react";
import "./menu.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ButtonSecComponent} from "../../components/input/buttons/button-sec/button-sec.component";

/*
    Menu page with redirects to project overview, newsfeed, and donation.
    First page after the welcome page.
 */

class MenuPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    //Redirect to project overview page
    handleHelpClick = () => {
        this.props.history.push(properties.urlProjectOverviewPage);
    }

    //Redirect to charity info and newsfeed
    handleInfoClick = () => {
        this.props.history.push(properties.urlInfoPage);
    }

    //Redirect straight to donation page
    handleDonateClick = () => {
        this.props.history.push(properties.urlDonationPage);
    }

    render() {
        return (
            <div id="page-container">
                <div id="menu-container" className="container-horizontal">
                    <PaddingComponent/>
                    <div id="menu-content" className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Main text*/}
                        <div id="menu-text-container" className="text-body">
                            {properties.menuTextMain}
                        </div>

                        <div className="container-vertical">
                            {/*Secondary text*/}
                            <div className="text-body">{properties.menuTextSec}</div>

                            {/*Button with redirect to project overview page*/}
                            <ButtonSecComponent
                                handleOnClick={this.handleHelpClick}
                                content={properties.menuButtonTextHelp}
                                iconLocation="images/icons/icon-help.svg"
                            />

                            <PaddingComponent basis="10px"/>

                            {/*Button with redirect to info page and newsfeed*/}
                            <ButtonSecComponent
                                handleOnClick={this.handleInfoClick}
                                content={properties.menuButtonTextInfo}
                                iconLocation="images/icons/icon-info.svg"
                            />

                            <PaddingComponent/>

                            {/*Button with redirect to the donation page*/}
                            <ButtonSecComponent
                                handleOnClick={this.handleDonateClick}
                                content={properties.menuButtonTextDonate}
                                iconLocation={"images/icons/icon-skip.svg"}
                                />
                        </div>
                    </div>
                    <PaddingComponent/>
                </div>

                <PaddingComponent/>
            </div>
        )
    }
}

export default MenuPage;