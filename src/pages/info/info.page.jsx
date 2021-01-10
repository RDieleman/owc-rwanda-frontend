import React, {Component} from "react";
import "./info.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {NewsList} from "../../components/news-list/news-list.component";

class InfoPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <div id="info-feed-container" className="container-horizontal">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div className="text-body">{properties.infoTextMain}</div>
                        <PaddingComponent/>
                        <div className="text-body">{properties.infoTextSec}</div>
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div className="text-body">{properties.infoTextThr}</div>
                        <PaddingComponent/>
                        <NewsList newsItems={this.props.newsItems}/>
                    </div>
                    <PaddingComponent/>
                </div>
            </div>
        );
    }
}

export default InfoPage;