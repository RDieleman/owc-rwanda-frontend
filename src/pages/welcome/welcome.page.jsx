import React, {Component} from "react";
import "./welcome.styles.css";
import {properties} from "../../properties";
import {HeaderComponent} from "../../components/header/header.component";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {ButtonSecComponent} from "../../components/input/buttons/button-sec/button-sec.component";

class WelcomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    //Redirect to menu page
    handleNextClick = () => {
        this.props.history.push(properties.urlMenuPage);
    }

    render() {
        return (
            <div id="page-container">
                {/*Main page content*/}
                <div className="container-vertical" id="welcome-content">
                    <div className="container-horizontal">
                        <PaddingComponent/>
                        <div className="container-vertical">
                            <PaddingComponent/>
                            <PaddingComponent/>

                            {/*Text content*/}
                            <div className="text-body">
                                {properties.welcomeTextMain}
                            </div>
                            <PaddingComponent/>
                            <PaddingComponent/>
                            <div className="text-body">
                                {properties.welcomeTextSec}
                            </div>
                            <PaddingComponent/>
                        </div>
                        <PaddingComponent/>
                    </div>

                    {/*Next button*/}
                    <ButtonMainComponent
                        handleOnClick={this.handleNextClick}
                        content="Continue"
                    />
                </div>
            </div>
        )
    }
}

export default WelcomePage;