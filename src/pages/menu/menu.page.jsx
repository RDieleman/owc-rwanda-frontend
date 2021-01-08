import React, {Component} from "react";
import "./menu.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ButtonSecComponent} from "../../components/input/buttons/button-sec/button-sec.component";

class MenuPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    handleHelpClick = () => {
        this.props.history.push(properties.urlProjectOverviewPage);
    }

    handleInfoClick = () => {
        console.log("info button clicked")
    }

    handleDonateClick = () => {
        this.props.history.push(properties.urlDonationPage);
        console.log("donate button clicked")
    }

    render() {
        return (
            <div id="page-container">
                <HeaderComponent/>
                <PaddingComponent/>
                <PaddingComponent/>
                <div id="menu-container" className="container-horizontal">
                    <PaddingComponent/>
                    <div id="menu-content" className="container-vertical">
                        <div id="menu-text-container" className="text-body">
                            {properties.menuTextMain}
                        </div>
                        <div className="container-vertical">
                            <div className="text-body">{properties.menuTextSec}</div>
                            <ButtonSecComponent
                                handleOnClick={this.handleHelpClick}
                                content={properties.menuButtonTextHelp}
                                iconLocation="images/icons/icon-help.svg"
                            />
                            <PaddingComponent basis="10px"/>
                            <ButtonSecComponent
                                handleOnClick={this.handleInfoClick}
                                content={properties.menuButtonTextInfo}
                                iconLocation="images/icons/icon-info.svg"
                            />
                            <PaddingComponent/>
                            <ButtonSecComponent
                                handleOnClick={this.handleDonateClick}
                                content={properties.menuButtonTextDonate}
                                iconLocation={"images/icons/icon-skip.svg"}
                                />
                        </div>
                    </div>
                    <PaddingComponent/>
                </div>

                <PaddingComponent type="col"/>
            </div>
        )
    }
}

export default MenuPage;