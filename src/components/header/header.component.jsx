import React from "react";
import "./header.styles.css";
import {properties} from "../../properties";
import {PaddingComponent} from "../layout/padding/padding.component";
import {ButtonIconComponent} from "../input/buttons/button-icon/button-icon.component";

/*
    The header component that contains the title and install button for the application.

    Whether installing is available depends on the install prompt provided by google.
    This install prompt is caught in App.js and the header will be updated once this is available.
    Once the app is installed the install button will be removed.
 */

export const HeaderComponent = ({installIsAvailable, handleInstallClicked}) => {
    return (
        // Header component
        <header className="header-container container-vertical">
            <PaddingComponent basis="10px"/>

            {/*Header content*/}
            <div className="header-content container-horizontal">

                <PaddingComponent/>

                {/*App name*/}
                <div className="header-title text-title">{properties.title}</div>

                {/*Show install button if prompt is available*/}
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