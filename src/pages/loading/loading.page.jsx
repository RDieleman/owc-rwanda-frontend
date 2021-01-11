import React, {Component} from "react";
import "./loading.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import Logo from "../../logo.svg";
import {properties} from "../../properties";

/*
    Page that will be displayed when loading state is active.
    Page replaces the whole app component so resources can be safely loaded.
    Only contains the logo and title of the app.
 */

class LoadingPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="loading-container" id="page-container">
                <div id="loading-info-container" className="container-vertical">
                    <div className="container-horizontal">
                        <PaddingComponent/>

                        {/*Info container*/}
                        <div className="container-vertical">
                            <div className="text-header">{properties.title}</div>
                            <div className="text-body">{properties.slogan}</div>
                        </div>

                    </div>
                    <PaddingComponent/>
                </div>

                {/*App logo*/}
                <div id="loading-indicator-container">
                    <PaddingComponent/>
                    <img id="logo" src={Logo} alt="logo"/>
                    <PaddingComponent/>
                </div>
            </div>
        );
    }
}

export default LoadingPage;