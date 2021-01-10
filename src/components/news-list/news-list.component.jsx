import React from "react";
import "./news-list.styles.css";
import {NewsListItem} from "./news-list-item/news-list-item.component";
import {PaddingComponent} from "../layout/padding/padding.component";

export const NewsList = ({newsItems}) => {
    return (
        <div className="container-vertical">
            {newsItems.map((n, i) => {
                return <div key={i} className="container-vertical">
                    <NewsListItem
                        description={n.description}
                        title={n.title}
                        imageUrl={n.imageUrl}
                        externalUrl={n.externalUrl}
                        key={i}
                    />
                    <PaddingComponent basis="10px"/>
                </div>

            })}
        </div>
    )
}