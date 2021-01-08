import React, {Component} from "react";
import "./donation.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {AmountSelectorComponent} from "../../components/input/amount-selector/amount-selector.component";
import {ButtonThrComponent} from "../../components/input/buttons/button-thr/button-thr.component";
import {DonationListComponent} from "../../components/donation-list/donation-list.component";
import {handlePayment} from "../../services/payment.service";

class DonationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    handleCustomAmountClick = () =>{

    }

    render() {
        return (
            <div id="page-container">
                <HeaderComponent/>
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div className="text-body">
                            {properties.donationTextMain}
                        </div>
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div className="text-body">
                            {properties.donationTextSec}
                        </div>
                        <PaddingComponent/>
                        <AmountSelectorComponent
                            amounts={properties.donationAmounts}
                            handleChoice={handlePayment}/>
                            <PaddingComponent/>
                            <ButtonThrComponent
                                handleOnClick={this.handleCustomAmountClick}
                                content={properties.donationTextCustom}
                                />
                                <PaddingComponent/>
                                <PaddingComponent/>
                                <DonationListComponent donations={this.props.donations}/>
                                <PaddingComponent/>

                    </div>
                    <PaddingComponent/>
                </div>
            </div>
        )
    }

}

export default DonationPage;