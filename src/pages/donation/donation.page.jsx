import React, {Component} from "react";
import "./donation.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {AmountSelectorComponent} from "../../components/input/amount-selector/amount-selector.component";
import {ButtonThrComponent} from "../../components/input/buttons/button-thr/button-thr.component";
import {DonationListComponent} from "../../components/donation-list/donation-list.component";
import {NumBox} from "../../components/input/num-box/num-box.component";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";

/*
    Page used to handle choosing the donation amount.

    Url will contain the id of the project the user chose to support.
    If the user was redirect directly from the menu page there won't be an id.

    The payment service is used to handle the actual payment.

    After handling the payment the user will be redirected to the payment result page.
 */

class DonationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customAmount: null, //handle custom amount if needed
            popupVisible: false //visibility status of custom amount popup
        }
    }

    //Set the visibility status of custom amount popup
    handleSetVisibility = (value) => {
        this.setState({popupVisible: value});
    }

    //Handle the change of the input field of the custom amount
    handleCustomAmountChanged = (event) => {
        this.setState({customAmount: event.target.value})
    }

    //Handle the payment by redirecting to the payment service
    //Lazy import to prevent unneeded loading
    handlePayment = (amount) => {
        import("../../services/payment.service").then(f => {
            f.handlePayment(amount);
        });
    }

    render() {
        return (
            <div id="page-container">
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Main text*/}
                        <div className="text-body">
                            {properties.donationTextMain}
                        </div>

                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*Secondary text*/}
                        <div className="text-body">
                            {properties.donationTextSec}
                        </div>

                        <PaddingComponent/>

                        {/*Amount selector tool with predefined amounts*/}
                        <AmountSelectorComponent
                            amounts={properties.donationAmounts}
                            handleChoice={this.handlePayment}/>

                        <PaddingComponent/>

                        {/*Button to open popup for custom amounts*/}
                        <ButtonThrComponent
                            handleOnClick={() => this.handleSetVisibility(true)}
                            content={properties.donationTextCustom}
                        />

                        <PaddingComponent/>
                        <PaddingComponent/>

                        {/*List of the most recent donations*/}
                        <DonationListComponent donations={this.props.donations}/>

                        <PaddingComponent/>
                    </div>

                    <PaddingComponent/>
                </div>

                {/*Custom amount popup*/}
                {(this.state.popupVisible) ?

                    // Popup container with opaque background
                    <div className="popup">

                        {/*The content of the popup with solid background*/}
                        <div className="popup-content-container container-horizontal">

                            <PaddingComponent/>

                            <div className="popup-content container-vertical">

                                <PaddingComponent/>
                                <PaddingComponent/>

                                {/*Input field for custom amount*/}
                                <NumBox
                                    min={0}
                                    max={Number.MAX_SAFE_INTEGER}
                                    placeholder={properties.donationNumboxPlaceholder}
                                    handleInputChange={this.handleCustomAmountChanged}/>

                                <PaddingComponent basis="10px"/>

                                {/*Confirm button to redirect to payment service*/}
                                <ButtonMainComponent
                                    content={properties.donationButtonConfirm}
                                    handleOnClick={() => this.handlePayment(this.state.customAmount)}
                                />

                                <PaddingComponent/>
                                <PaddingComponent/>

                            </div>

                            <PaddingComponent/>
                        </div>

                        {/*Invisible background to close the popup when user clicks the background*/}
                        <div className="popup-background"
                             onClick={() => this.handleSetVisibility(false)}/>
                    </div> :
                    ""
                }
            </div>
        )
    }

}

export default DonationPage;