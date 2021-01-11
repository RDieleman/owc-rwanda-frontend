import React, {Component} from "react";
import "./info.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {NewsList} from "../../components/news-list/news-list.component";

/*
    Page that contains a little information about the charity and the newsfeed.

    Expects a list of news items as property
 */

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

                        {/*Main text*/}
                        <div className="text-body">{properties.infoTextMain}</div>

                        <PaddingComponent/>

                        {/*Secondary text*/}
                        <div className="text-body">{properties.infoTextSec}</div>
                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Tertiary text*/}
                        <div className="text-body">{properties.infoTextThr}</div>

                        <PaddingComponent/>

                        {/*Newsfeed*/}
                        <NewsList newsItems={this.props.newsItems}/>
                    </div>
                    <PaddingComponent/>
                </div>
            </div>
        );
    }
}

export default InfoPage;