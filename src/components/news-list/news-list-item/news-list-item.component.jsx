import React from "react";
import "./news-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

export const NewsListItem = ({title, description, imageUrl, externalUrl}) => {
    return (
        <div className="news-item-container container-vertical"
             onClick={() => window.location.href = externalUrl}>
            <img src={imageUrl} alt="news-feed-item"/>
            <div className="container-vertical">
                <PaddingComponent basis="10px"/>
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="text-body-sec">{title}</div>
                    <PaddingComponent/>
                </div>
                <PaddingComponent basis="10px"/>
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="text-body-thr">
                        {description}
                    </div>
                    <PaddingComponent/>
                </div>

                <PaddingComponent/>
            </div>
        </div>
    )
}