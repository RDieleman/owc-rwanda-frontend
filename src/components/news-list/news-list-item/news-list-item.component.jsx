import React from "react";
import "./news-list-item.styles.css";
import {PaddingComponent} from "../../layout/padding/padding.component";

/*
    News list item that fills the newsfeed.
    This component contains the title, description and cover image.
    It will also redirect to the provided url.
 */
export const NewsListItem = ({title, description, imageUrl, externalUrl}) => {
    return (
        // News item container that handles the redirecting to external website
        <div className="news-item-container container-vertical"
             onClick={() => window.location.href = externalUrl}>

            {/*Main news item image*/}
            <img src={imageUrl} alt="news-feed-item"/>

            {/*Container for news info*/}
            <div className="container-vertical">
                <PaddingComponent basis="10px"/>

                {/*Title container*/}
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="text-body-sec">{title}</div>
                    <PaddingComponent/>
                </div>

                <PaddingComponent basis="10px"/>

                {/*Description container*/}
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