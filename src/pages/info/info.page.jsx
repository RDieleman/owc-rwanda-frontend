import React, {Component} from "react";
import "./info.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";

class InfoPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <HeaderComponent/>
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div>Info</div>
                    </div>
                    <PaddingComponent/>
                </div>
            </div>
        );
    }
}

export default InfoPage;