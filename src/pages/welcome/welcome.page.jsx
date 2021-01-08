import React, {Component} from "react";
import "./welcome.styles.css";
import { properties } from "../../properties";
import {HeaderComponent} from "../../components/header/header.component";
import {ButtonMainComponent} from "../../components/buttons/button-main/button-main.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";

class WelcomePage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    //Redirect to menu page
    handleNextClick = () =>{
        this.props.history.push(properties.urlMenuPage);
    }

    render() {
        return (
            <div id="page-container">
                {/*Header*/}
                <HeaderComponent/>

                {/*Main page content*/}
                <div id="welcome-content">
                    <div>
                        <PaddingComponent type="row"/>
                        <div className="welcome-text-container">
                            <PaddingComponent type="col"/>
                            <PaddingComponent type="col"/>

                            {/*Text content*/}
                            <div className="welcome-text-main text-body">
                                {properties.welcomeTextMain}
                            </div>
                            <PaddingComponent type="col"/>
                            <PaddingComponent type="col"/>
                            <div className="welcome-text-sec text-body">
                                {properties.welcomeTextSec}
                            </div>
                            <PaddingComponent type="col"/>
                        </div>
                        <PaddingComponent type="row"/>
                    </div>

                    {/*Next button*/}
                    <ButtonMainComponent
                        handleOnClick={this.handleNextClick}
                        content="Next"
                    />
                </div>
            </div>
        )
    }
}

export default WelcomePage;