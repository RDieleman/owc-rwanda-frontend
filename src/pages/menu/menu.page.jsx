import React, {Component} from "react";
import "./menu.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {ButtonSecComponent} from "../../components/buttons/button-sec/button-sec.component";

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
        console.log("donate button clicked")
    }

    render() {
        return (
            <div id="page-container">
                <HeaderComponent/>
                <PaddingComponent type="col"/>
                <PaddingComponent type="col"/>
                <div id="menu-container">
                    <PaddingComponent type="row"/>
                    <div id="menu-content">
                        <div id="menu-text-container" className="text-body">
                            {properties.menuTextMain}
                        </div>
                        <div id="menu-button-container">
                            <div className="text-body">{properties.menuTextSec}</div>
                            <ButtonSecComponent
                                handleOnClick={this.handleHelpClick}
                                content={properties.menuButtonTextHelp}
                                iconLocation="images/icons/icon-help.svg"
                            />
                            <PaddingComponent type="col" styling="button-padding"/>
                            <ButtonSecComponent
                                handleOnClick={this.handleInfoClick}
                                content={properties.menuButtonTextInfo}
                                iconLocation="images/icons/icon-info.svg"
                            />
                            <PaddingComponent type="col"/>
                            <ButtonSecComponent
                                handleOnClick={this.handleDonateClick}
                                content={properties.menuButtonTextDonate}
                                iconLocation={"images/icons/icon-skip.svg"}
                                />
                        </div>
                    </div>
                    <PaddingComponent type="row"/>
                </div>

                <PaddingComponent type="col"/>
            </div>
        )
    }
}

export default MenuPage;