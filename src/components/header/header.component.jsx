import React from "react";
import "./header.styles.css";
import {properties} from "../../properties";
import {PaddingComponent} from "../layout/padding/padding.component";
import {ButtonSecComponent} from "../input/buttons/button-sec/button-sec.component";

export const HeaderComponent = ({installIsAvailable, handleInstallClicked}) => {
    return (
        <header className="header-container container-vertical">
            <PaddingComponent basis="10px"/>
            <div className="header-content container-horizontal">
                <PaddingComponent/>
                <img className="header-logo" src={"/images/icons/logo.png"}/>
                <PaddingComponent basis="10px"/>
                <div className="header-title text-title">{properties.title}</div>
                {(installIsAvailable) ?
                    <div className="container-horizontal">
                        <PaddingComponent basis="10px"/>
                        <ButtonSecComponent
                            handleOnClick={() => handleInstallClicked()}
                            content="Install"/>
                    </div>:""}
                <PaddingComponent/>
            </div>
            <PaddingComponent basis="10px"/>
        </header>
    )
}