import React, {Component} from "react";
import "./loading.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import Logo from "../../logo.svg";
import {properties} from "../../properties";

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
                        <div className="container-vertical">
                            <div className="text-header">{properties.title}</div>
                            <div className="text-body">{properties.slogan}</div>
                        </div>
                    </div>
                    <PaddingComponent/>
                </div>
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