import React from "react";
import "./charity-list.styles.css"
import {CharityListItemComponent} from "./charity-list-item/charity-list-item.component";


export const CharityListComponent = ({charities}) =>{
    return(
        <div className="project-list-container container-vertical">
            {charities.map((c,i) => {
                return <CharityListItemComponent
                    name={c.name}
                    description={c.description}
                    imageUrl={c.logoUrl}
                    externalUrl={c.externalUrl}
                    key={i}
                />
            })}
        </div>
    )
}