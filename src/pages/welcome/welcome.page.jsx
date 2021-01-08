import React from "react";
import "./welcome.styles.css";
import { properties} from "../../properties";
import {HeaderComponent} from "../../components/header/header.component";
import {ButtonMainComponent} from "../../components/buttons/button-main/button-main.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";

export const WelcomePage = ({}) =>{
    const handleNextClick = () =>{
        console.log("Button next clicked")
    }
    return (
        <div id="welcome-container">
            {/*Header*/}
            <HeaderComponent/>

            {/*Main page content*/}
            <div id="welcome-content">
                <div>
                    <PaddingComponent type="row"/>
                    <div className="welcome-text-container">
                        <PaddingComponent type="col"/>
                        <PaddingComponent type="col"/>

                        {/*Text content*/}
                        <div className="welcome-text-main text-body">
                            {properties.welcomeTextMain}
                        </div>
                        <PaddingComponent type="col"/>
                        <PaddingComponent type="col"/>
                        <div className="welcome-text-sec text-body">
                            {properties.welcomeTextSec}
                        </div>
                        <PaddingComponent type="col"/>
                    </div>
                    <PaddingComponent type="row"/>
                </div>

                {/*Next button*/}
                <ButtonMainComponent
                    handleOnClick={handleNextClick}
                    content="Next"
                />
            </div>
        </div>
    )
}