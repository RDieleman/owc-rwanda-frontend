import React from "react";
import "./header.styles.css";
import {properties} from "../../properties";
import {PaddingComponent} from "../layout/padding/padding.component";
import {ButtonSecComponent} from "../input/buttons/button-sec/button-sec.component";
import {ButtonIconComponent} from "../input/buttons/button-icon/button-icon.component";

export const HeaderComponent = ({installIsAvailable, handleInstallClicked}) => {
    return (
        <header className="header-container container-vertical">
            <PaddingComponent basis="10px"/>
            <div className="header-content container-horizontal">
                <PaddingComponent/>
                <div className="header-title text-title">{properties.title}</div>
                {(installIsAvailable) ?
                    <ButtonIconComponent
                        handleOnClick={() => handleInstallClicked()}
                        iconUrl="/images/icons/icon-install.svg"/>:""}
                <PaddingComponent/>
            </div>
            <PaddingComponent basis="10px"/>
        </header>
    )
}